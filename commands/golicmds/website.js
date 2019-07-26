const Discord = require('discord.js')

module.exports = class Website {
    constructor(){
    this.name = 'website',
    this.alias = ['web', 'site'];
    this.usage = 'website'
    }

    run(bot, message, args){
        message.channel.send(`https://goli.xyz/`)
    }
}
