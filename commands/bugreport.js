const Discord = require("discord.js");

module.exports = class suggestion {
    constructor(){
        this.name = 'bugreport',
        this.alias = ['br', 'report'],
        this.usage = 'bugreport'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
         embed.setTitle(`New Bug Report Incoming`)
         embed.setColor(0xF08080)
         embed.setDescription('There is a new Bug Report;')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Bug**',
         `${message.author.lastMessage}`)
         embed.addField('Bug Report by:',
         `<@${message.author.id}>`)

         bot.channels.get("591830130301861898").send(embed);
         message.delete();
         message.author.send(`<@${message.author.id}>, Thank you for reporting a bug to Goli Network Developers :smile:`)
         }
    }