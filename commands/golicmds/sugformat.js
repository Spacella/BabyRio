const Discord = require("discord.js");

module.exports = class sugformat {
    constructor(){
        this.name = 'sugformat',
        this.alias = ['sugf'],
        this.usage = 'sugformat'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    if (message.author.id === '581203970203189269')
    embed.author('-=[Suggest Features Information]=-')
    embed.setTitle('Suggest Features')
    embed.setColor("DE1738")
    embed.setDescription('How to make a new Suggestion:\n \nType **+su <suggestion>** in <#546874704850321409> to make a suggestion, These will be put to poll in the channel for the server to vote.\n \nThis is only for small suggestions, Larger suggestions can be posted at https://goli.xyz/forums/suggestions-feedback.7/')
    embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
    embed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')

    message.channel.send(embed) 
    message.delete();
    }
}