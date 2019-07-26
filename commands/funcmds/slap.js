const Discord = require("discord.js");

const gifs =  [
    "https://media1.tenor.com/images/d83626e7031b78c1fde67ccedc43ec01/tenor.gif",
    "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif",
    "https://media1.tenor.com/images/b3aae9bb30e3689ff9c06b4b0d61b7e1/tenor.gif",
    "https://media1.tenor.com/images/4a6b15b8d111255c77da57c735c79b44/tenor.gif",
    "https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif",
    "https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif",
    "https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif"
];
module.exports = class slap {
    constructor(){
        this.name = 'slap',
        this.alias = ['hit'],
        this.usage = 'slap'
    }

    run(bot, message, args){

    let slaps = Math.floor(Math.random() * (gifs.length -1) + 1);
    let embed = new Discord.RichEmbed();

    var command = args[0];
    var mentioned = args.slice(1).join(" ")

    embed.setDescription(`**<@${message.author.id}> slaps ${mentioned}**`)
    embed.setColor(0xF08080)
    embed.setImage(`${gifs[slaps]}`)

    if (!message.guild) return;

    if (message.mentions.members.first()) {
        message.channel.send(embed)
    } else {
        message.channel.send('You need to mention to slap.')
    }}
}