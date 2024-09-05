class CommandHandler {
    constructor(bot) {
        this.initCommandListeners();
    }

    initCommandListeners() {

    }

    basicCommandHandler(command, responceMsg) {
        const regexCmd = new RegExp(command);

        this._bot.onText(regexCmd, receivedMsg => {
            const chatId = receivedMsg.chat.id;

            this._bot.sendMessage(chatId, responceMsg);
        });
    }

}

module.exports = {
    CommandHandler,
}