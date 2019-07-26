const Discord = require("discord.js");

module.exports = class suggestion {
    constructor(){
        this.name = 'suggestion',
        this.alias = ['suggest', 'su'],
        this.usage = 'suggestion'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        //suggestion variables

        var command = args[0];
        var suggestion = args.slice(1).join(" ");
        var yes = '597942179838558210';
        var no = '597942166517710868';
        
        if (message.content === `${command}`) return message.reply('You need to provide a suggestion!').then(message.delete());
        
         embed.setTitle(`Upvote | Downvote`)
         embed.setColor("76b3fc")
         embed.setDescription('Suggest features to our server with:\n `+su <suggestion>`')
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addBlankField(true)
         embed.addField('**Suggestion**',
         `${suggestion}`)
         embed.addField('**Suggestion by:**',
         `<@${message.author.id}>`)

         if (!message.guild) return;
         if (message.guild.id === '505872328538718233')
         bot.channels.get("574366597515444244").send(embed).then(x=> x.react(`${yes}`).then(x.react(`${no}`)));
         message.delete();
         }
    }
// Yes: 597942179838558210
// No: 597942166517710868

//(x=> x.react('597942179838558210') Yes
//(x.react('597942166517710868') No