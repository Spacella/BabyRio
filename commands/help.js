const Discord = require('discord.js');
const botVersion = '1.0';

module.exports = class rio {
    constructor(){
        this.name = 'rio',
        this.alias = ['rhelp', 'help']
        this.usage = 'rio'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        
        embed.setTitle('-=[Baby Rio Bot]=-')
        embed.setAuthor('Rio Info', `${bot.user.avatarURL}`)
        embed.addField('Baby Rio Version',
        botVersion)
        embed.addField(`Author`,
        '[Ori#0004](https://github.com/Oribuin/)')
        embed.addField(`Library`, 
        '[discord.js](https://discord.js.org/#/)')
        embed.addField('Servers:',
        `${bot.guilds.size}`)
        embed.addField('Users using Baby Rio',
        `${bot.users.size}`)
        embed.setColor(0xF08080)
        embed.setThumbnail(`${message.author.avatarURL}`)
        embed.setFooter(`Requested by: ${message.author.tag}`)
        embed.setTimestamp()

        message.channel.send(embed);
        message.delete();

    }
}
