const Discord = require("discord.js");

module.exports = class howgay {
    constructor(){
        this.name = 'howgay',
        this.alias = ['gay'],
        this.usage = 'howgay'
    }

    run(bot, message, args){
        var min=1;
        var max=100;
        var random =Math.floor(Math.random() * (+max - +min)) + +min;
    let embed = new Discord.RichEmbed();
    if (!message.guild) return;

    embed.setAuthor(`How gay is ${message.author.tag}?`)
    embed.setDescription(`<@${message.author.id}> is ${random}% gay :gay_pride_flag: `)
    embed.setTimestamp()
    embed.setColor(0xF08080)

    message.channel.send(embed);
    }
}