require('dotenv').config();

const libCurrency = require("./lib/currency.js")
const handlersCurrency = require("./handlers/currency.js")

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const TOKEN = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {
  polling: true
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

//привязка команд бота

bot.onText(/\/to (.+)/, (msg, match) => {
  const currency = match[1].split(" ")[0];
  const sum = match[1].split(" ")[1];
  if (!libCurrency.checkCurrency(currency)) {
    bot.sendMessage(msg.chat.id, `Валюты ${currency} не существует`)
    return
  }

  handlersCurrency.toCurrency(bot, msg.chat.id, sum, currency)
})

bot.onText(/\/from (.+)/, (msg, match) => {
  const currency = match[1].split(" ")[0];
  const sum = match[1].split(" ")[1];
  handlersCurrency.fromCurrency(bot, msg.chat.id, sum, currency)
})


// bot.onText(/\/rurToUsd (.+)/, (msg, match) => {
//   //const chatId = msg.chat.id

//   handlersCurrency.toCurrency(bot, msg.chat.id, match[1])
// })
// bot.onText(/\/usdToRur (.+)/, (msg, match) => {
//   const chatId = msg.chat.id
//   handlersCurrency.fromCurrency(bot, chatId, match[1])
// })

// bot.onText(/\/eurToRur (.+)/, (msg, match) => {
//   const chatId = msg.chat.id
//   handlersCurrency.fromCurrency(bot, chatId, match[1])
// })

// bot.onText(/\/rurToEur (.+)/, (msg, match) => {
//   const chatId = msg.chat.id
//   handlersCurrency.toCurrency(bot, chatId, match[1])
// })

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});