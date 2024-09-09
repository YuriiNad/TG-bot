const { commands } = require('../entities/commands');
const {getValue} = require('./../helpers/helpers');

class CommandHandler {
    constructor(bot) {
        this.initCommandListeners();
    }

    initCommandListeners() {
    }

    basicCommandHandler(command, resp) {
        const regexCmd = new RegExp(command);

        this._bot.onText(regexCmd, receivedMsg => {
            const chatId = receivedMsg.chat.id;
            this._bot.sendMessage(chatId, resp);
        });
    }

    startCmdHandler() {
        const cmd = getValue(commands,'start');
        this.basicCommandHandler();
    }

}

module.exports = {
    CommandHandler,
}