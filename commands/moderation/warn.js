const Discord = require("discord.js");

module.exports = class warn {
    constructor(){
        this.name = 'warn',
        this.alias = [''],
        this.usage = 'warn';
    }

    run(bot, message, args){
        let embed1 = new Discord.RichEmbed();
        let modlogs = new Discord.RichEmbed();


        var command = args[0];
        var mentioned = args[1];
        var reason = args.slice(2).join(" ");


        if (!message.mentions.users.first()) {
        message.reply('You need to mention someone to warn. Correct warn format: `+warn <player> <reason>`')
        message.delete();
        } else {

            embed1.setColor("76b3fc")
            embed1.setDescription(`**You have been warned!, ${mentioned}** <:PanCop:589141466727841793>`)
            embed1.addField('Reason:',
            `${reason}`)
            embed1.addField('Warned by:',
            `${message.author.tag}`)
    
    
            modlogs.setDescription('**New Warn Issued!** <:PanCop:589141466727841793>')
            modlogs.setColor("76b3fc")
            modlogs.addField('Warn By:',
            `<@${message.author.id}>`)
            modlogs.addField('Warned Player:',
            `${mentioned}`)
            modlogs.addField('Reason',
            `${reason}`)

            if (message.author.id === '345406020450779149', '568919303580024862', '205408309019148289') return

            try {
            bot.channels.get('602936602645233668').send(modlogs)
            message.channel.send(embed1)
            message.delete();

            } catch(error) {

            message.channel.send('You do not have permission to do this.').then(message.delete());
            }
        }
    }
}