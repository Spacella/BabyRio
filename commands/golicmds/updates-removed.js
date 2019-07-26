const Discord = require("discord.js");

module.exports = class removed {
    constructor(){
        this.name = 'removed',
        this.alias = ['r'],
        this.usage = 'removed';
    }

    run(bot, message, args){
        let removed = new Discord.RichEmbed();

        if (!message.guild) return;
        if (message.author.id === '345406020450779149')

        var command = args[0];
        var changes = args.slice(1).join(" ")

        removed.setColor("DE1738")
        removed.setDescription(`**Removed Features Log**\n \n${changes}`)
//        removed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
//        removed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')

        message.channel.send(removed)
        message.delete();

    }
}