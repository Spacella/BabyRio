const Discord = require("discord.js");

module.exports = class perhaps {
    constructor(){
        this.name = 'perhaps',
        this.alias = ['p'],
        this.usage = 'perhaps'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    embed.setImage('https://cdn.discordapp.com/attachments/597875233684324444/597920824527290390/d5a.png')
    embed.setColor(0x00ff11)

    message.channel.send(embed) 
    message.delete();
    }
}