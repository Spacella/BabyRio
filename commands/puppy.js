const Discord = require("discord.js");
const puppies = [
    "https://cdn.discordapp.com/attachments/598072175442001920/598072289887780865/c0dygqoo35t21.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598072316110438403/W61WJQgsXv3CTGSJiaG1iFvsEz1sbyP7ssWTonHRd0o.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598072351942377485/5j90vryl.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598072379838693400/36vZy2m4dqYzdkx7rOmVvmdefxKr8EEhTRU-m0fCWJk.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598072438496034826/xScflEYon0Xklnz6sEjsrypXuoCPrBpNT868m849Sbk.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598077041497341962/47uJpYI.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598077178915061760/oh7hn0bogf921.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598077277221158922/L7P8j3r.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598077408415055892/i8w72lazagl11.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598077569157562369/8gqBrSj.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598077881654050817/2gk9xnn59rh11.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598078045680828449/DGmngJA.png",
    "https://cdn.discordapp.com/attachments/598072175442001920/598078183161724964/eyfbc2owsec11.png",
];
module.exports = class puppie {
    constructor(){
        this.name = 'puppies',
        this.alias = ['pup', 'puppie', 'dog', 'doggo', 'puppy'],
        this.usage = 'puppies'
    }
    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        let doggos = Math.floor(Math.random() * (puppies.length -1) + 1);
        embed.setDescription(`Good Bois <:RioHug:591102792207433729>`)
        embed.setImage(puppies[doggos]);
        embed.setColor(0x00ff11)
        embed.setTimestamp()
        embed.setFooter(`Requested by ${message.author.tag}`)
    
        message.channel.send(embed) 
        message.delete();
    }
}