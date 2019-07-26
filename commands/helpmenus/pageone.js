const Discord = require("discord.js");

module.exports = class pageone {
    constructor(){
        this.name = 'pageone',
        this.alias = ['helpfun'],
        this.usage = 'pageone'
    }

    run(bot, message, args){
    let page1embed = new Discord.RichEmbed();

    var command = args[0];

        page1embed.setAuthor(`Baby Rio Help | Page 1`);
        page1embed.setColor("76b3fc");
        page1embed.setDescription('`+ball` - Magic 8 Ball\n`+gay` - 1-100 scale of gay\n`+kitty` - Picture of a Cat\n`+dog` - Picture of a Dog\n`+reptile` - Picture of a Reptile\n`+meme` - Gives you memes\n`+perhaps` - Perhaps Cow\n`+slap` - Slaps Someone\n`+tom` - Picture of a unsettled Tom\n  \n**Page 1/5 - Type **`+helputil`** for next page!**');

        message.channel.send(page1embed)
    }
}