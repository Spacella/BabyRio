const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = class mcinfo {
    constructor(){
        this.name = 'mcinfo',
        this.alias = ['pinfo'],
        this.usage = 'mcinfo'
    }
    run(bot, message, args){
        var request = require("request");
        var command = args[0];
        var username = args.slice(1).join(" ");
  
        var url = `https://minecraft-statistic.net/api/player/info/${username}`;
        request(url, function(err, response, body) {
            if(err) {

            msg.channel.send(err);

            return msg.reply("Error getting Minecraft User stats...");

            }

            if(url = `https://minecraft-statistic.net/api/player/info/${username}`) {
                let embed = new Discord.RichEmbed();
                
                embed.setTitle(`Rio User Info`)
                embed.setFooter(`Requested by ${message.author.tag}`)
                embed.setURL(`https://namemc.com/profile/${username}`)
                embed.setTimestamp()
                embed.setColor("F08080")
                embed.addField(`Username:`,
                `${username}`)
                embed.addField('UUID:',
                `${body.status.uuid}`)
                 embed.setThumbnail(`https://cravatar.eu/head/9f7cf461903f4ef88a88bdbc49806364`)

                message.channel.send(embed)

            } else {
                message.channel.send('We couldn\'t get the status of that user. :frowning:')
            }
  

            message.delete()
        });
    }
}