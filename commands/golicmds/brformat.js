const Discord = require("discord.js");

module.exports = class brformat {
    constructor(){
        this.name = 'brformat',
        this.alias = ['brf'],
        this.usage = 'brformat'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    if (message.author.id === '581203970203189269')
    embed.author('-=[Bug Report Information]=-')
    embed.setColor("DE1738")
    embed.setDescription('How to make a bug report:\n \nType !br <bug> in <#546874704850321409> to make your report!\n \n__This feature is only for small bug. Detailed descriptions of bugs **MUST** be reported on our forums__! \nhttps://goli.xyz/forums/bug-report-requirements.17/')
    embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
    embed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')

    message.channel.send(embed) 
    message.delete();
    }
}