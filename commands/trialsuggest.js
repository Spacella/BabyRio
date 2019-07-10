const Discord = require("discord.js");

module.exports = class trial {
    constructor(){
        this.name = 'tsu',
        this.alias = ['tsuggest', 'tsuggestion'],
        this.usage = 'tsu'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        var suggestion = args[0];
         embed.setTitle(`Upvote | Downvote`)
         embed.setColor(0xF08080)
         embed.setDescription('Suggest features to our server with:\n `+su <suggestion>`')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Suggestion**',
         `${suggestion}`)
         embed.addField('**Suggestion by:**',
         `<@${message.author.id}>`)

         bot.channels.get("577491181697630244").send(embed).then(x=> x.react('597942179838558210').then(x.react('597942166517710868')))
         }
    }
// Yes: 597942179838558210
// No: 597942166517710868