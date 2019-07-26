const Discord = require("discord.js");

module.exports = class avatar {
    constructor(){
        this.name = 'avatar',
        this.alias = ['ava']
        this.usage = 'avatar'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        
        embed.setDescription(`**Your Avatar**`)
        embed.setImage(`${message.author.avatarURL}`)
        embed.setTimestamp()
        embed.setColor("76b3fc")

        message.channel.send(embed);

    }
}