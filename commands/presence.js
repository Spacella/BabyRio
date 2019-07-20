const Discord = require('discord.js');

module.exports = class presence {
    constructor(){
        this.name = 'presence',
        this.alias = ['pres'],
        this.usage = 'presence'
    }
    run(bot, message, args){

        var command = args[0];
        var input = args.slice(2).join(" ")
        var type = args[1]

        if (message.author.id === '345406020450779149')

        bot.user.setActivity(`${input}`, { type: `${type}`})

        message.channel.send(`Set the current presence as ${type} ${input}`)
    }
}
