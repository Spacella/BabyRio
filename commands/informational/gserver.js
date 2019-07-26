const Discord = require('discord.js');

module.exports = class gserver {
    constructor(){
        this.name = 'gserver',
        this.alias = ['stats', 'ginfo']
        this.usage = 'gserver'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();

        if (!message.guild.available)
        embed.setTitle(`${message.guild.name}'s Info`)
        embed.setAuthor('Server Stats', `${bot.user.avatarURL}`)
        embed.addField('Players:',
        `${message.guild.memberCount}`)
        embed.addField(`Owner:`,
        `<@${message.guild.ownerID}>`)
        embed.addField(`Verified:`, 
        `${message.guild.verified}`)
        embed.addField('Region:',
        `${message.guild.region}`)
        embed.addField('AFK Channel:',
        `${message.guild.afkChannel}`)
        embed.setColor("76b3fc")
        embed.setThumbnail(`${message.guild.iconURL}`)
        embed.setFooter(`Requested by: ${message.author.tag}`)
        embed.setTimestamp()

        message.channel.send(embed);
        message.delete();

    }
}