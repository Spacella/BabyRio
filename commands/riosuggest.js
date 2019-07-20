const Discord = require("discord.js");

module.exports = class suggestion {
    constructor(){
        this.name = 'rsuggestion',
        this.alias = ['rsuggest', 'rsu'],
        this.usage = 'rsuggestion'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()

        var command = args[0];
        var suggestion = args.slice(1).join(" ");

         embed.setTitle(`Baby Rio Suggestion`)
         embed.setColor(0xF08080)
         embed.setDescription('A user has suggested a new feature for Baby Rio!')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Suggestion**',
         `${suggestion}`)
         embed.addField('**Suggestion by:**',
         `<@${message.author.id}>`)

         bot.users.get('345406020450779149').send(embed)
         message.author.send('Thank you for suggesting a feature to Baby Rio Bot :heart: Once the developer has read it, we will get back to you!')
         message.delete();
         console.log(`${message.author.id}/${message.author.tag} Just suggested a new feature to Baby Rio!`)
         }
    }
// Yes: 597942179838558210
// No: 597942166517710868