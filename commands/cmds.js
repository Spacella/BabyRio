const Discord = require("discord.js");

module.exports = class cmds {
    constructor(){
        this.name = 'cmds',
        this.alias = ['cmd', 'commands'],
        this.usage = 'cmds'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    embed.setAuthor(`Baby Rio Bot Commands`)
    embed.setColor(0xF08080)
    embed.setDescription(`**Fun Commands:**\n+8ball\n+howgay\n+avatar\n+perhaps\n**Utility Commands:**\n+ping\n+uptime\n+avatar\n+rhelp`)
    embed.setTimestamp()
    embed.setFooter(`Requested by: ${message.author.tag}`)
    embed.setThumbnail(`${message.author.avatarURL}`)

    message.channel.send(embed) 
    message.delete();
    }
}