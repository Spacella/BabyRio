const Discord = require("discord.js");

module.exports = class two {
    constructor(){
        this.name = 'two',
        this.alias = [''],
        this.usage = 'two'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        if (message.author.id === '345406020450779149')
    embed.setAuthor('Vote Links')
    embed.setDescription('**PlanetMC:** https://www.planetminecraft.com/server/goli-network-4314326/\n**MCServers:** https://minecraftservers.org/server/551834\n**MCSL:** https://minecraft-server-list.com/server/440349/vote/\n**MCMP:** https://minecraft-mp.com/server/222914/vote/\n**TopG:** https://topg.org/Minecraft/in-514440')
    embed.setColor("76b3fc")

    message.channel.send(embed) 
    message.delete();
    }
}