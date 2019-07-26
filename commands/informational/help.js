const Discord = require('discord.js');
const botVersion = '2.0';

module.exports = class rio {
    constructor(){
        this.name = 'rio',
        this.alias = ['rhelp']
        this.usage = 'rio'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        
        embed.setTitle('-=[Baby Rio Bot]=-')
        embed.setAuthor('Rio Info', `${bot.user.avatarURL}`)
        embed.setDescription('**Type** `+cmds` **for the command list**')
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
        embed.addField('Activity:',
        `${bot.game}`)
        embed.addField('Status',
        `${bot.status}`)
        embed.setColor("76b3fc")
        embed.setThumbnail(`${message.author.avatarURL}`)
        embed.setFooter(`Requested by: ${message.author.tag}`)
        embed.setTimestamp()


        message.channel.send(embed);
        message.delete();

    }
}