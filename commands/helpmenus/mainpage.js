const Discord = require("discord.js");

module.exports = class mainpage {
    constructor(){
        this.name = 'mainpage',
        this.alias = ['help'],
        this.usage = 'help'
    }

    run(bot, message, args){
    let mainembed = new Discord.RichEmbed();

    var command = args[0];
    var pagechoice = args[1];

    if (message.content === `${command}`) {

    mainembed.setAuthor(`Baby Rio Help | Page: Main`);
    mainembed.setColor("F08080");
    mainembed.setDescription('**Pages**\n \n`+helpfun` - Fun Commands\n`+helputil` - Utility Commands\n`+helpvc` - Voice Channel Commands\n`+helpgolimc` - Goli Network Commands\n`+helpmc` - MC Commands\n \n**Commands Loaded: 56**')

    message.channel.send(mainembed)
    }}
}