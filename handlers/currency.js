const libCurrency = require("../lib/currency.js")

const takeUsdToRur = async (bot, chatId, sum) => {
    bot.sendMessage(chatId,  await libCurrency.from(sum, "USD"))
}

const takeRurToUsd = async (bot, chatId, sum) => {
    bot.sendMessage(chatId,  await libCurrency.to(sum, "USD"))
}

const takeEurToRur = async (bot, chatId, sum) =>{
    bot.sendMessage(chatId, await libCurrency.from(sum, "EUR"))
}
const takeRurToEur = async (bot, chatId, sum) =>{
    bot.sendMessage(chatId, await libCurrency.to(sum, "EUR"))
}


module.exports = {
    takeUsdToRur,
    takeRurToUsd,
    takeEurToRur,
    takeRurToEur
}