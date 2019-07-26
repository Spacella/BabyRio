const Discord = require("discord.js");

module.exports = class tom {
    constructor(){
        this.name = 'tom',
        this.alias = [''],
        this.usage = 'tom'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    embed.setImage('https://cdn.discordapp.com/attachments/399737312998850569/598327632161013761/unknown.png')

    message.channel.send(embed) 
    message.delete();
    }
}