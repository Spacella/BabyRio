const Discord = require('discord.js');
const botVersion = '1.0';

module.exports = class Rio {
    constructor(){
        this.name = 'Rio',
        this.alias = ['rhelp']
        this.usage = 'rio'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        
        embed.setTitle('-=[Rio Rewrite Bot]=-')
        embed.setAuthor('Rio Rewrite Info', `${bot.user.avatarURL}`)
        embed.addField('Rio Rewrite Version',
        botVersion)
        embed.addField(`Author`,
        '[Ori#0004](https://github.com/Oribuin/)')
        embed.addField(`Library`, 
        '[discord.js](https://discord.js.org/#/)')
        embed.addField('Servers:',
        `${bot.guilds.size}`)
        embed.addField('Users using Rio Rewrite',
        `${bot.users.size}`)
        embed.setColor(0xF08080)
        embed.setThumbnail(`${message.author.avatarURL}`)
        embed.setFooter(`Requested by: ${message.author.tag}`)
        embed.setTimestamp()

        message.channel.send(embed);
        message.delete();

    }
}