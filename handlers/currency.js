const libCurrency = require("../lib/currency.js")

const takeUsdToRur = async (bot, chatId, sum) => {
    bot.sendMessage(chatId,  await libCurrency.usdToRur(sum))
}

const takeRurToUsd = async (bot, chatId, sum) => {
    bot.sendMessage(chatId,  await libCurrency.rurToUsd(sum))
}

const takeEurToRur = async (bot, chatId, sum) =>{
    bot.sendMessage(chatId, await libCurrency.eurToRur(sum))
}
const takeRurToEur = async (bot, chatId, sum) =>{
    bot.sendMessage(chatId, await libCurrency.rurToEur(sum))
}


module.exports = {
    takeUsdToRur,
    takeRurToUsd,
    takeEurToRur,
    takeRurToEur
}