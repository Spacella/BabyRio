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
    embed.setDescription(`Suggest new features to <@581203970203189269> with \`+rsu <suggestion>\``)
    embed.addField('**Fun Commands**',
    '`+ball`, `+howgay`, `+perhaps`, `+puppy`')
    embed.addField(`**Utility Commands**`,
    '`+avatar`, `+ping`, `+uptime`, `+rio`, `+github`')
    embed.addField('**Goli Network Commands**',
    '`+report`,`+su`, `+website`')
    embed.setTimestamp()
    embed.setFooter(`Requested by: ${message.author.tag}`)
    embed.setThumbnail(`${message.author.avatarURL}`)

    message.channel.send(embed) 
    message.delete();
    }
}