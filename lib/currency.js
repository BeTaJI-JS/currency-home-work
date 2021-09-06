const URL = "https://www.cbr-xml-daily.ru/daily_json.js"
const fetch = require("node-fetch")

// let cashedUsdRate = null
// let cashedEurRate = null

let cashedCurrencyRate = {}
//общая функция кэширования валюты
const getCurrencyRate = async (currency) => {
    if (!cashedCurrencyRate[currency.toUpperCase()]) {
        cashedCurrencyRate[currency.toUpperCase()] = await fetch(URL)
            .then(res => res.json())
            .then(data => {
                return data.Valute[currency.toUpperCase()].Value
                })
    }
    return cashedCurrencyRate[currency.toUpperCase()]
}




// const getUsdRate = async () => {
//     if (!cashedUsdRate) {
//         cashedUsdRate = await fetch(URL)
//             .then(res => res.json())
//             .then(data => { return data.Valute.USD.Value })
//     }
//     return cashedUsdRate
// }

// const getEurRate = async () => {
//     if (!cashedEurRate) {
//         cashedEurRate = await fetch(URL)
//             .then(res => res.json())
//             .then(data => { return data.Valute.EUR.Value })
//     }
//     return cashedEurRate
// }
const checkCurrency = (currency) =>{
    if(!!signs[currency.toLowerCase()]){
        return true
    }
    else {
        return false
    }
}

const signs = {
    "usd" :  "$",
    "eur" : "€",
    "rur" : "₽",
}

const s = (currency) => {
    return  !!signs[currency.toLowerCase()] ? signs[currency.toLowerCase()] : currency.toUpperCase()
}

const to = async (sum, currency) => {
    const currencyRate = await getCurrencyRate(currency)
    return `${Math.round(sum * 100 / currencyRate) / 100}${s(currency)}`
}

const from = async (sum, currency) =>{
    const currencyRate=  await getCurrencyRate(currency)
    return `${Math.round(sum * 100 * currencyRate) / 100}${s("RUR")}`
}
// const rurToUsd = async (item) => {
//     let priceUsd = await getCurrencyRate("USD")
//     if (item > 0) {
//         return "$" + Math.round(item * 100 / priceUsd) / 100
//     }
// }
// const usdToRur = async (item) => {
//     let priceUsd = await getCurrencyRate("USD")
//     if (item > 0) {
//         return `${Math.round(item * 100 * priceUsd) / 100}₽`
//     }
// }
// const eurToRur = async (item) => {
//     let priceEur = await getCurrencyRate("EUR")
//     if (item > 0) {
//         return `${Math.round(item * 100 * priceEur) / 100}₽`
//     }
// }

// const rurToEur = async (item) => {
//     let priceEur = await getCurrencyRate("EUR")
//     if (item > 0) {
//         return `${Math.round(item * 100 / priceEur) / 100}€`
//     }
// }




module.exports = {
    getCurrencyRate,
    to,
    from,
    checkCurrency,
}