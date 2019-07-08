const Discord = require("discord.js");

module.exports = class test {
    constructor(){
        this.name = 'test',
        this.alias = ['t'],
        this.usage = '+test'
    }

    run(bot, message, args){
    message.reply('Bot Working :smile:')
    }
}