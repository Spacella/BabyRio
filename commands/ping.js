const Discord = require("discord.js");

module.exports = class ping {
    constructor(){
        this.name = 'ping',
        this.alias = ['ping'],
        this.usage = 'ping'
    }

    run(bot, message, args){
        message.channel.send("Pinging....").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp

            m.edit(`Bot Latency: ${ping}\nAPI Latency: ${Math.round(bot.ping)}`)
        })
    }
}