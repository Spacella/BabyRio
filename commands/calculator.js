const Discord = require('discord.js');
const Math = require('mathjs');

module.exports = class calculator {
    constructor(){
        this.name = 'calculator',
        this.alias = ['calc'],
        this.usage = 'calculate'
    }
    run(bot, message, args){

        var command = args[0]
        var equation = args.slice(1).join(" ");

        if (!args[0]) return message.reply(`Input a calculation after. Example: +calc 10+10`)

        try {
            equation  = Math.evaluate(args[1]);

        } catch (error) {

            return message.channel.send('Input a correct calculation. Example: **+calc 10+10**')
        }

        let embed = new Discord.RichEmbed();

        embed.setColor("F08080")
        embed.setTitle('Rio\'s Math Class')
        embed.setDescription('**Symbols**: \n**+** (Addition)\n**-** (Subtraction)\n** * ** (Multiply)\n **/** (Divide)\n \nInput does not have the symbol in it?\nFormat: "**+calc 10+10**"')
        embed.addField('Input', `\`\`\`js\n${args[1]}\`\`\``)
        embed.addField('Output', `\`\`\`js\n${equation}\`\`\``)
        embed.setTimestamp()
        embed.setFooter(`Requested by: ${message.author.tag}`)

        message.channel.send(embed)


    }
}
