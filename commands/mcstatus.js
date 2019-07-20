const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = class mcstatus {
    constructor(){
        this.name = 'mcstatus',
        this.alias = ['mcstat'],
        this.usage = 'mcstatus'
    }
    run(bot, message, args){
        var request = require("request");
        var command = args[0];
        var ip = args.slice(1).join(" ");
  
        var url = `http://mcapi.us/server/status?ip=${ip}`;
        request(url, function(err, response, body) {
            if(err) {

            msg.channel.send(err);

            return msg.reply("Error getting Minecraft server stats...");

            }
  
            body = JSON.parse(body);

            var status = `Server you mentioned is either __offline__ or you haven't entered a correct IP. :frowning:`;

            if(body.online) {
                let embed = new Discord.RichEmbed();

                let duration = (body.duration)
                let days = Math.floor(duration / 86400);
                let hours = Math.floor(duration / 3600);
                duration %= 3600;
                let minutes = Math.floor(duration / 60);
                let seconds = duration % 60;
                seconds = seconds.toFixed(2);
                
                embed.setTitle(`Rio Server Info`)
                embed.setFooter(`Requested by ${message.author.tag}`)
                embed.setURL('http://mcapi.us')
                embed.setTimestamp()
                embed.setColor("F08080")
                embed.addField(`IP:`,
                `${ip}`)
                embed.addField('Players: ',
                 + body.players.now + `/` + body.players.max)
                 embed.addField('Uptime: ',
                 `Days: **${days}**\n Hours: **${hours}** \nMinutes: **${minutes}** \nSeconds: **${seconds}**`)

                message.channel.send(embed)

            } else {
                message.channel.send('We couldn\'t get the status of that server. :frowning:')
            }
  

            message.delete()
        });
    }
}