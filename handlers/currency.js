const libCurrency = require("../lib/currency.js")

const takeUsdToRur = async (bot, chatId, sum) => {
    bot.sendMessage(chatId, `${libCurrency.usdToRur(sum)}`)
}

const takeRurToUsd = async (bot, chatId, sum) => {
    bot.sendMessage(chatId, `${libCurrency.rurToUsd(sum)}`)
}


module.exports = {
    takeUsdToRur,
    takeRurToUsd
}