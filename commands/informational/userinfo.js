const Discord = require('discord.js');

module.exports = class userinfo {
    constructor(){
        this.name = 'userinfo',
        this.alias = ['uinfo'],
        this.usage = 'userinfo'
    }
    run(bot, message, args){

        var command = args[0];
        var input = args.slice(2).join(" ")
        var type = args[1]
        let embed = new Discord.RichEmbed()
        
        if (!message.guild.id) return;
        
        embed.setAuthor('Your User Info.')
        embed.setDescription(`Here are a list of all your player info :smile:\n \nUser: <@${message.author.id}>\nID: ${message.author.id}`)
        embed.addField('Nickname:',
        `${message.member.displayName}`)
        embed.addField('Created at:',
        `${message.author.createdAt}`)
        embed.addField('Joined server:', 
        `${message.member.joinedAt}`)
        embed.addField('Status:',
        `${message.author.presence.status}`)
        embed.addField('Game:',
        `${message.author.presence.game}`)
        embed.setColor("76b3fc")
        embed.setThumbnail(`${message.author.avatarURL}`)

        message.channel.send(embed)
    }
}