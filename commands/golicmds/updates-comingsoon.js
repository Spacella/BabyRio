const Discord = require("discord.js");

module.exports = class comingsoon {
    constructor(){
        this.name = 'comingsoon',
        this.alias = ['cs'],
        this.usage = 'comingsoon';
    }

    run(bot, message, args){
        let comingsoon = new Discord.RichEmbed();

        if (!message.guild) return;
        if (message.author.id === '345406020450779149')

        var command = args[0];
        var changes = args.slice(1).join(" ")

        comingsoon.setColor("F08080")
        comingsoon.setDescription(`**Features Coming Soon**\n \n${changes}`)
//        fixed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
//        fixed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')

        message.channel.send(comingsoon)
        message.delete();

    }
}