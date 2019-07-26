const Discord = require("discord.js");
const eightball = [
    ":8ball: It is certain.",
    ":8ball: It is decidedly so.",
    ":8ball: Without a doubt.",
    ":8ball: Definetly.",
    ":8ball: You may rely on it.",
    ":8ball: As I see it, yes.",
    ":8ball: Most likely.",
    ":8ball: Outlook good.",
    ":8ball: Yes.",
    ":8ball: Signs point to yes.",
    ":8ball: Reply hazy, try again.",
    ":8ball: Ask again later.",
    ":8ball: Better not tell you now.",
    ":8ball: Cannot predict now.",
    ":8ball: Concentrate and ask again.",
    ":8ball: Don't count on it.",
    ":8ball: My reply is no",
    ":8ball: My sources say no.",
    ":8ball: Outlook no so good.",
    ":8ball: Very doubtful."
];
module.exports = class ball {
    constructor(){
        this.name = 'ball',
        this.alias = ['8ball'],
        this.usage = 'ball'
    }
    run(bot, message, args){
        var command = args[0]
        var question = args.slice(1).join(" ")

        if (message.content === `${command}`) return message.reply('Please respond with a question.')

        let ballargs = Math.floor(Math.random() * (eightball.length -1) + 1);
        let embed = new Discord.RichEmbed();

        embed.setTitle('Rio\'s Magic Ball')
        embed.setThumbnail('https://cdn.discordapp.com/emojis/435587158682763275.png?v=1')
        embed.addField('Question:',
        `${question}`)
        embed.addField('Answer:',
        `${eightball[ballargs]}`)
        embed.setColor("F08080")

        message.channel.send(embed)
    }
}