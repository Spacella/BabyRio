const Discord = require("discord.js");

module.exports = class suggestion {
    constructor(){
        this.name = 'suggestion',
        this.alias = ['!su']
        this.usage = 'su'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();
        let suggest = args[0];
        embed.setAuthor('New Suggestion')
        embed.setTitle('Upvote | Downvote')
        embed.setColor(0x008080)
        embed.setDescription('Suggest Features to our server with:\n ``!su <suggestion>``')
        embed.setThumbnail(`${message.author.displayAvatarURL}`)
        embed.addBlankField(true)
        embed.addField('**Suggestion:**',
        `${message.author.lastMessage}`)
        embed.addField('Suggestion by:',
        `${message.author.tag}`)

        bot.channels.get("574366597515444244").send(embed);
          embed.react("👍")
          embed.react("👎")
          message.delete()
    }
}