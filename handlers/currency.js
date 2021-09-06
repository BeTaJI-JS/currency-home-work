const libCurrency = require("../lib/currency.js")




const toCurrency =  async (bot, chatId, sum, currency ) => {
    bot.sendMessage(chatId, await libCurrency.to(sum, currency))
}


const fromCurrency = async (bot, chatId, sum, currency ) => {
    bot.sendMessage(chatId, await libCurrency.from(sum, currency))
}
// const takeUsdToRur = async (bot, chatId, sum) => {
//     bot.sendMessage(chatId,  await libCurrency.from(sum, "USD"))
// }

// const takeRurToUsd = async (bot, chatId, sum) => {
//     bot.sendMessage(chatId,  await libCurrency.to(sum, "USD"))    //1
// }

// const takeEurToRur = async (bot, chatId, sum) =>{
//     bot.sendMessage(chatId, await libCurrency.from(sum, "EUR"))
// }
// const takeRurToEur = async (bot, chatId, sum) =>{
//     bot.sendMessage(chatId, await libCurrency.to(sum, "EUR"))     //1
// }


module.exports = {
    // takeUsdToRur,
    // takeRurToUsd,
    // takeEurToRur,
    // takeRurToEur,
    toCurrency,
    fromCurrency
}