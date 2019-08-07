const Discord = require("discord.js");

module.exports = class pollping {
    constructor(){
        this.name = 'pollping',
        this.alias = ['polls'],
        this.usage = 'poleping'
    }

    run(bot, message, args){

        if (!message.guild) return;
        if (message.guild.id === '505872328538718233')

        if (message.member.roles.has('598771429701451796')) {
            message.reply('You will no-longer receive notifications from Polls.');
            message.member.removeRole('598771429701451796')

            console.log(`${message.author.tag} has taken away their Poll Ping Role.`)
        } else {
            message.reply('You will now receive notifications from Polls.')
            message.member.addRole('598771429701451796')

            console.log(`${message.author.tag} has given themself the Poll Ping Role.`)
        }
    }
}