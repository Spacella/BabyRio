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
    embed.setDescription('How to make a bug report:\n \nType !br <bug> in <#546874704850321409> to make your report!\n \n__Only type bug reports in <#546874704850321409>__ \nBug Report Feature coming to website soon!')
    embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')

    message.channel.send(embed) 
    message.delete();
    }
}