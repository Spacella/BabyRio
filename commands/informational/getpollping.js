const Discord = require("discord.js");

module.exports = class pollping {
    constructor(){
        this.name = 'pollping',
        this.alias = ['polls'],
        this.usage = 'poleping'
    }

    run(bot, message, args){

        if (message.guild.id === '505872328538718233')

        message.author.addRole('598771429701451796')
        
        message.reply('You will now get a ping everytime there is a new poll')
    }
}