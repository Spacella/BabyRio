const Discord = require("discord.js");

module.exports = class one {
    constructor(){
        this.name = 'one',
        this.alias = [''],
        this.usage = 'one'
    }

    run(bot, message, args){
    let embed = new Discord.RichEmbed();
    if (message.author.id === '345406020450779149')
    embed.setAuthor('Main Server Links')
    embed.setDescription('**Website:** https://goli.xyz\n**Store:** https://store.goli.xyz\n**Rules:** https://goli.xyz/threads/main-server-rules.6/\n**Mod Rules:** https://goli.xyz/threads/forge-mod-rules.13/\n**Feedback:** https://goli.xyz/forums/suggestions-feedback.7/\n**Staff Apps:** https://goli.xyz/forums/staff-requirements.5/\n**Builder Apps:** https://goli.xyz/forums/builder-requirements.8/\n**Media Apps:** https://goli.xyz/forums/media-requirements.21/\n**Staff Report:** https://goli.xyz/forums/staff-report-requirements.15/\n**Bug Report:** https://goli.xyz/forums/bug-report-requirements.17/')
    embed.setColor(0xF08080)

    message.channel.send(embed) 
    message.delete();
    }
}