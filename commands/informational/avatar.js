const Discord = require("discord.js");

module.exports = class avatar {
    constructor(){
        this.name = 'avatar',
        this.alias = ['ava'],
        this.usage = 'avatar'
    }

    run(bot, message, args){
    let nomention = new Discord.RichEmbed();
    
    if (!message.guild) return;

    nomention.setDescription(`Your Avatar`)
    nomention.setImage(`${message.author.avatarURL}`)
    nomention.setColor("76b3fc")

    message.channel.send(nomention);
    }
}