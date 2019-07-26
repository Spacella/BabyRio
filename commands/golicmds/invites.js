const Discord = require("discord.js");

module.exports = class invites {
    constructor(){
        this.name = 'invites',
        this.alias = ['leaderboard'],
        this.usage = 'invites'
    }

    run(bot, message, args){

        const invites = {};

        const wait = require('util').promisify(setTimeout);

        wait(1000)

        bot.guilds.forEach(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
            })
        })

        bot.on('guildMemberAdd', member => {
            member.guild.fetInvites().then(guildInvites => {

                const ei = invites[member.guild.id];

                invites[member.guild.id] = guildInvites;

                const invite = guildInvites.find(i => ei.get(i.conde).uses < i.uses);

                const inviter = bot.users.get(invite.inviter.id);

                const logChannel = member.guild.channels.find(bot.channels.get(604113105005445162));

                logChannel.send(`<@${member.user.id}> joined using invite code ${invite.code} from ${inviter.tag}.\nInvite was used ${invite.uses} times since its creation.`)
            })
        })
    }
}