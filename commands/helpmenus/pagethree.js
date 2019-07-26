const Discord = require("discord.js");

module.exports = class pagethree {
    constructor(){
        this.name = 'pagethree',
        this.alias = ['helpvc'],
        this.usage = 'pagethree'
    }

    run(bot, message, args){
    let page3embed = new Discord.RichEmbed();

    var command = args[0];

    page3embed.setAuthor(`Baby Rio Help | Page 3`);
    page3embed.setColor("F08080");
    page3embed.setDescription('`+vc` - Allows Rio to Join your VC\n`+lvc` - Allows Rio to Leave your VC\n`+dhorn` - Plays Dixie Horn Sound\n  \n**Page 3/5 - Type **`+helpgolimc`** for next page!**')

        message.channel.send(page3embed)
    }
}