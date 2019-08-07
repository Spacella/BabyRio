const Discord = require("discord.js");

module.exports = class leavevc {
    constructor(){
        this.name = 'leavevc',
        this.alias = ['lvc'],
        this.usage = 'leavevc'
    }

    run(bot, message, args){
        if (!message.guild) return;
        if (message.member.voiceChannel) {
            message.member.voiceChannel.leave()
                message.channel.send('Successfuly left the Voice Channel. :heart:')
                message.delete();
        } else {
            message.reply('I am not in a Voice Channel')
            message.delete();
        }
    }
}