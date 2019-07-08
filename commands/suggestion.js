const Discord = require("discord.js");

module.exports = class suggestion {
    constructor(){
        this.name = 'suggestion',
        this.alias = ['suggest', 'su'],
        this.usage = 'suggestion'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        let sugg = args[0];
         embed.setAuthor('New Suggestion')
         embed.setTitle(`Upvote | Downvote`)
         embed.setColor(0xF08080)
         embed.setDescription('Suggest features to our server with:\n `+su <suggestion>`')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Suggestion**',
         `${sugg}`)
         embed.addField('**Suggestion by:',
         `<@${message.author.id}>`)

         message.channel.send(embed)
         message.delete();
    }
}