const Discord = require("discord.js");

module.exports = class joinvc {
    constructor(){
        this.name = 'joinvc',
        this.alias = ['vc'],
        this.usage = 'joinvc'
    }

    run(bot, message, args){
        if (!message.guild) return;
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection => {
                message.channel.send('Successfuly joined the Voice Channel. :heart:')
                message.delete();
            })
            .catch(console.error(Error));
        } else {
            message.reply('You need to join a Voice Channel first.')
            message.delete();
        }
    }
}