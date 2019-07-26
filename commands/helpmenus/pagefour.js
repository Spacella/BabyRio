const Discord = require("discord.js");

module.exports = class pagefour {
    constructor(){
        this.name = 'pagefour',
        this.alias = ['helpgolimc'],
        this.usage = 'pagefour'
    }

    run(bot, message, args){
    let page4embed = new Discord.RichEmbed();

    var command = args[0];

    page4embed.setAuthor(`Baby Rio Help | Page 4`);
    page4embed.setColor("F08080");
    page4embed.setDescription('`+br <bug>` - Report Bugs to Devs\n`+su <suggsetion`> - Suggest small features to Goli Network\n`+rules` - Server Rules\n  \n**Page 4/5 - Type **`+helpgolimc`** for next page!**')

        message.channel.send(page4embed)
    }
}