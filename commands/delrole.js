const Discord = require('discord.js')

module.exports = class delrole {
    constructor(){
    this.name = 'delrole',
    this.alias = ['role del'.split(/ +/g)],
    this.usage = 'delrole'.split(/ +/g);
    }

    run(bot, message, args){
        let input = args[0];
        let myRole = message.guild.roles.find(role => role.mention === `${input}`).delete(input);
        if (message.author.id === '345406020450779149')
        message.reply(`You have deleted: <@&ROLE_ID>`)
    }
}
