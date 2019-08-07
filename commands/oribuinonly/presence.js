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
        var type = args[1];

        let embed = new Discord.RichEmbed();
        
        embed.setAuthor('Changed Presence')
        embed.addField('Activity:',
        `${input}`)
        embed.addField('Type:',
        `${type}`)
        embed.addField('Status',
        `${bot.user.presence.status}`)
        embed.setColor("76b3fc")
        embed.setThumbnail(`${message.author.avatarURL}`)

        if (message.author.id === '345406020450779149')
        
        bot.user.setActivity(`${input}`, { type: `${type}`}).then(message.channel.send(embed));
    }
}