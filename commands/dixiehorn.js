const Discord = require("discord.js");

module.exports = class dhorn {
    constructor(){
        this.name = 'dhorn',
        this.alias = [''],
        this.usage = 'dhorn'
    }

    run(bot, message, args){
        if (!message.guild) return;
        if (message.author.id === '345406020450779149')
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection => {
                connection.playFile('C:/Users/epics/Desktop/Bots/sounds/dixie-horn_daniel-simion.mp3');
                message.channel.send('Hehe :wink:')
                message.delete();
            })
        }
    }
}