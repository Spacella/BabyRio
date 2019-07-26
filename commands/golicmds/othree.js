const Discord = require("discord.js");

module.exports = class three {
    constructor(){
        this.name = 'three',
        this.alias = [''],
        this.usage = 'three'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        if (message.author.id === '345406020450779149')
    embed.setAuthor('Git Links')
    embed.setDescription('**Oribuin:** https://github.com/Oribuin/\n**Spacella:** https://gitlab.com/spacella/')
    embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
    embed.setColor("76b3fc")

    message.channel.send(embed) 
    message.delete();
    }
}