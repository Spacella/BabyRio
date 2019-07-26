const Discord = require("discord.js");

module.exports = class changed {
    constructor(){
        this.name = 'changed',
        this.alias = ['c'],
        this.usage = 'changed';
    }

    run(bot, message, args){
        let changed = new Discord.RichEmbed();

        if (!message.guild) return;
        if (message.author.id === '345406020450779149')

        var command = args[0];
        var changes = args.slice(1).join(" ")

        changed.setColor("F99245")
        changed.setDescription(`**Changed Features / Bugs Fixed Log**\n \n${changes}`)
//        changed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
//        changed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')

        message.channel.send(changed)
        message.delete();

    }
}