const Discord = require("discord.js");

module.exports = class purge {
    constructor(){
        this.name = 'purge',
        this.alias = ['delete'],
        this.usage = 'purge'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        //suggestion variables
        var command = args[0];
        var purged = args.slice(1).join(" ");
        //Embed
         embed.setTitle(`MESSAGES PURGED`)
         embed.setColor("76b3fc")
         embed.setThumbnail(`${message.author.avatarURL}`)
         embed.addField('Amount Purged',
         `${purged}`)

         //after command is sent
         if (message.guild.id === '505872328538718233')
         message.channel.bulkDelete(args[1])
         message.channel.send(embed)

         console.log(`${purged} Messages deleted by ${message.author.tag}`)
         }
    }
// Yes: 597942179838558210
// No: 597942166517710868