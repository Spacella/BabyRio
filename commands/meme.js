const Discord = require("discord.js");
const snekfetch = require('snekfetch');

module.exports = class memes {
    constructor(){
        this.name = 'meme',
        this.alias = ['me-me'],
        this.usage = 'meme'
    }
    run(bot, message, args){
        try {
            const { body } = new snekfetch
            .get('https://www.reddit.com/r/memes.json?sort=top&t=week')
            .query({ limit: 800 });
            let allowed = true;
            if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
            const randomnumber = Math.floor(Math.random() ( allowed.length))
            let embed = new Discord.RichEmbed()
            embed.setColor(0x00A2E8)
            embed.setTitle(allowed[randomnumber].data.title)
            embed.setDescription("Posted by: " + allowed[randomnumber].data.author)
            embed.setImage(allowed[randomnumber].data.url)
            embed.addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
            embed.setFooter("Memes provided by r/memes")

            channel.send(embed)
        } catch (err) {
            return console.log(err);
        }
    }
}