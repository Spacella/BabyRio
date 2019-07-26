const Discord = require("discord.js");

module.exports = class Poll {
    constructor(){
        this.name = 'poll',
        this.alias = [''],
        this.usage = 'poll'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        //announcment variables
        var command = args[0];
        var poll = args.slice(1).join(" ");

        embed.setAuthor('New Server Poll')
        embed.setDescription(`${poll}`)
        embed.setFooter(`Poll by: ${message.author.tag}`)
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
        embed.setColor("76b3fc")
        embed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')

        if (message.member.hasPermission('MENTION_EVERYONE'))
                
        bot.channels.get("574122179038412810").send('Hey @here <:Bri_Wave:579035075102900229>').then(message.channel.send(embed).then(x=> x.react('597942179838558210').then(x.react('597942166517710868'))))
        message.delete()
    }
}