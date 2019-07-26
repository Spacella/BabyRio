const Discord = require("discord.js");

module.exports = class pagetwo {
    constructor(){
        this.name = 'pagetwo',
        this.alias = ['helputil'],
        this.usage = 'pagetwo'
    }

    run(bot, message, args){
    let page2embed = new Discord.RichEmbed();

    var command = args[0];

    page2embed.setAuthor(`Baby Rio Help | Page 2`);
    page2embed.setColor("F08080");
    page2embed.setDescription('`+avatar` - Gets your Profile Picture\n`+calc <num1>+<num2>` - Works as a Calculator\n`+github` - Oribuin\'s github\n`+help` - Shows Main Help Page\n`+ping` - Shows Bot & API Latency\n`+uptime` - How long baby rio has been online\n`+uinfo` - Shows your info\n  \n**Page 2/5 - Type **`+helpvc`** for next page!**')

        message.channel.send(page2embed)
    }
}