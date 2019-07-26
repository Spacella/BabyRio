const Discord = require("discord.js");

module.exports = class ban {
    constructor(){
        this.name = 'ban',
        this.alias = ['rban'],
        this.usage = 'ban';
    }

    run(bot, message, args){

        let banned = new Discord.RichEmbed();

        if (!message.guild) return;
        if (message.author.id === '345406020450779149')
        if (message.guild.id === '505872328538718233')

        if (!message.mentions.users.first()) return;


        let command = args[0];
        let mentioned = args.slice(1).join(" ");
        let reason = args.slice(2).join(" ");
        

        banned.setAuthor('Member Banned');
        banned.setColor("DE1738");
        banned.addBlankField('User Banned:',
        `${mentioned}`);
        banned.addField('Reason:',
        `${reason}`);
        banned.addField('Banned by:',
        `<${message.author.id}>`);

        message.member.ban()
        .then(() => {

        message.channel.send(banned);
        message.delete();

        bot.channels.get('602936602645233668').then(message.channel.send(banned));

        }).catch(err => {
            message.reply('I was unable to ban that member. <:Bri_Crying:580035067791933441>');
            
            console.error(err);
        });
        
    }
};
//            reason: `${reason}`,