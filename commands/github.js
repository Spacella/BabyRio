const Discord = require("discord.js");

module.exports = class github {
    constructor(){
        this.name = 'github',
        this.alias = ['git'],
        this.usage = 'github'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    embed.setAuthor('GitHub Pages')
    embed.setDescription('**Baby Rio GitHub Page:**\nhttps://github.com/Oribuin/BabyRio\n**Spacella GitLab Page:**\nhttps://gitlab.com/spacella/')
    embed.setColor(0xF08080)
    embed.setThumbnail(`${message.author.avatarURL}`)
    embed.setTimestamp();

    message.channel.send(embed) 
    message.delete();
    }
}