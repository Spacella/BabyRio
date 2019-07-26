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
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
    let mention = new Discord.RichEmbed();
    let nomention = new Discord.RichEmbed();

    var command = args[0];
    var mentioned = args.slice(1).join(" ")

    if (!message.guild) return;

    if (!message.mentions.users.first()) {
    nomention.setDescription(`<@${message.author.id}> is ${random}% gay :gay_pride_flag: `)
    nomention.setColor(0xF08080)

    message.channel.send(nomention);
    } else {
        
        mention.setDescription(`${mentioned} is ${random}% gay :gay_pride_flag:`)
        mention.setColor("76b3fc")

        message.channel.send(mention)
    }}
}