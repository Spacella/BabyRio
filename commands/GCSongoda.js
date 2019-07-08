const Discord = require("discord.js");

module.exports = class GCsongoda {
    constructor(){
        this.name = 'GCsongoda',
        this.alias = 'song',
        this.usage = 'songoda'
    }

    run(bot, message, args){
        message.channel.send('Commands: &6#&ehelp &6#&esongoda &6#&egithub &6#&ediscord &6#&elink &6#&eapply &6#&euptime')
    }
}