const libCurrency = require("./lib/currency.js")
const start = async () => {


    // console.log(libCurrency.rurToUsd(75))

    // console.log(libCurrency.usdToRur(2))
    const rate = await libCurrency.getCurrencyRate("EUR")
    console.log(rate)

    const rate2 = await libCurrency.getCurrencyRate("USD")
    console.log(rate2)
}
start()