const Discord = require('discord.js')

module.exports = class crole {
    constructor(){
    this.name = 'crole',
    this.alias = [''],
    this.usage = 'crole'
    }

    run(bot, message, args){
        const embed = new Discord.RichEmbed();

        if (!message.guild)

        var command = args[0];
        var name = args[1];
        var color = args[2];

        if (message.member.hasPermissions(['MANAGE_CHANNELS', 'MANAGE_ROLES_OR_PERMISSIONS', 'SEND_MESSAGES', 'READ_MESSAGES', 'READ_MESSAGE_HISTORY']))
        message.guild.createRole({
            name: `${name}`,
            color: `${color}`
        })
        embed.setColor(color)
        embed.setTitle('New Role Created!')
        embed.addField('Role Created:',
        `${name}`)
        embed.addField('Color:',
        `#${color}`)

        message.channel.send(embed)
    }
}