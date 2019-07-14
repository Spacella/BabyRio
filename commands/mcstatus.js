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
            var status = `Server you mentioned is either __offline__ or you haven't entered a correct IP!`;
            if(body.online) {
            status = `IP: **${ip}**`;
            if(body.players.now) {
                status += `\nPeople Playing: **` + body.players.now + `**`;
            } else {
                status += `\n*No one is playing right now`;
            }
            }
  
            message.channel.send(status);
            message.delete()
        });
    }
}