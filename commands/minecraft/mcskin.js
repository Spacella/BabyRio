const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = class mcskin {
    constructor(){
        this.name = 'mcskin',
        this.alias = ['skin'],
        this.usage = 'mcskin'
    }
    run(bot, message, args){
        var request = require("request");
        var command = args[0];
        var username = args.slice(1).join(" ");
  
        var url = `https://minotar.net/armor/body/${username}/100.png`;
        request(url, function(err, response, body) {
            if(err) {

            msg.channel.send(err);

            return msg.reply("Error getting Minecraft User Skin...");

            }
            if (url = `https://minotar.net/armor/body/${username}/100.png`) {

                let embed = new Discord.RichEmbed();

                embed.setTitle('BabyRio Skin Stealer')
                embed.setFooter(`Requested by ${message.author.tag}`)
                embed.setTimestamp()
                embed.setColor("76b3fc")
                embed.setImage(`https://minotar.net/armor/body/${username}/100.png`)
                embed.setDescription(`Gained the skin of ${username}.`)
                embed.setThumbnail(`https://minotar.net/cube/${username}/100.png`)

                message.channel.send(embed)

            } else {
                message.channel.send('We couldn\'t get the skin of that player. :frowning:')
            }
  

            message.delete()
        });
    }
}