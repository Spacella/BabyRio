const Discord = require("discord.js");

module.exports = class pagefive {
    constructor(){
        this.name = 'pagefive',
        this.alias = ['helpmc'],
        this.usage = 'pagefive'
    }

    run(bot, message, args){
    let page5embed = new Discord.RichEmbed();

    var command = args[0];

    page5embed.setAuthor(`Baby Rio Help | Page 5`);
    page5embed.setColor("F08080");
    page5embed.setDescription('`+mcstat <server-ip>` - Stats of a Server.\n`+mcskin <username>` - Gets the skin of a user\n  \n**Page 5/5 - Type **`+helpgolimc`** for last page!**')

        message.channel.send(page5embed)
    }
}