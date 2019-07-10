const Discord = require("discord.js");

module.exports = class uptime {
    constructor(){
        this.name = 'uptime',
        this.alias = ['ontime'],
        this.usage = 'uptime'
    }

    run(bot, message, args){
            let embed = new Discord.RichEmbed();

            let totalSeconds = (bot.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;
            seconds = seconds.toFixed(2);
            
            embed.setFooter(`Requested by ${message.author.tag}`)
            embed.setTimestamp()
            embed.addField('Days',
            `${days}`)
            embed.addField('Hours',
            `${hours}`)
            embed.addField('Minutes',
            `${minutes}`)
            embed.addField('Seconds',
            `${seconds}`)
            embed.setThumbnail(`${message.author.avatarURL}`)
            embed.setColor("F08080")

            message.channel.send(embed)
    }
}