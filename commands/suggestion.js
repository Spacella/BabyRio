const Discord = require("discord.js");

module.exports = class suggestion {
    constructor(){
        this.name = 'suggestion',
        this.alias = ['suggest', 'su'],
        this.usage = 'suggestion'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
         embed.setTitle(`Upvote | Downvote`)
         embed.setColor(0xF08080)
         embed.setDescription('Suggest features to our server with:\n `+su <suggestion>`')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Suggestion**',
         `${message.author.lastMessage}`)
         embed.addField('**Suggestion by:**',
         `<@${message.author.id}>`)

         bot.channels.get("574366597515444244").send(embed).then(x=> x.react('597942179838558210').then(x.react('597942166517710868')))
         message.delete();
         }
    }
// Yes: 597942179838558210
// No: 597942166517710868