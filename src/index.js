const { token } = require('./config/config');
const { CommandHandler } = require('./core/handlers/command-handler');

const TelegramBot = require('node-telegram-bot-api');


const bot = new TelegramBot(token, { polling: true });
const commandsHandler = new CommandHandler(bot);

bot.on('message', (msg) => {
    const chatId = msg.chat.id

    bot.sendMessage(chatId, JSON.stringify(msg)); // відправляє тільки стрічку
    console.log('Handles text')
})

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, JSON.stringify(msg));
    console.log('Handles commands')
})