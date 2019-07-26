const Discord = require("discord.js");

module.exports = class permlist {
    constructor(){
        this.name = 'permlist',
        this.alias = ['perms'],
        this.usage = 'permlist'
    }

    run(bot, message, args){
        message.channel.send('https://discordapp.com/developers/docs/topics/permissions')
    }
}