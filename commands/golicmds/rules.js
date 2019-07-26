const Discord = require("discord.js");

module.exports = class rulesone {
    constructor(){
        this.name = 'rules',
        this.alias = ['rule'],
        this.usage = 'rules'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();

        if (!message.guild) return;

        embed.setColor("DE1738")
        embed.setAuthor('Goli Network Discord Rules')
        embed.setDescription(`**1.** Be Respectful to each other and don't fight. (Don't start drama in the server, Keep personal things in DMs.)\n**2.** Do not spam in chat.\n**3.** You can curse but keep it to a minimum.\n**4.** No inapropriaet images.\n**5.** Listen to staff, When they tell you to do something please respect and listen.\n**6.** No Discrimination towards anyone.\n**7.** Do not bypass Anti-Advertising.\n**8.** Do not discuss sensitive topics such as Suicide.\n \nFind out the rest of our rules:\nhttps://goli.xyz/forums/rules.12/`)
        embed.setFooter('Failure to comply will result in a Mute or a Ban.')
        embed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')
        embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
        
        message.channel.send(embed)
    }
}