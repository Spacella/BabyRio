const Discord = require("discord.js");

module.exports = class advert {
    constructor(){
        this.name = 'advert',
        this.alias = ['advert'],
        this.usage = 'advert'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed();

        if (!message.guild) return;
        if (message.author.id === '345406020450779149', '194137531695104000')

        embed.setColor("DE1738")
        embed.setAuthor('Goli Network - 1.13.2-1.14.4')
        embed.setFooter('Join now!')
        embed.setDescription('Goli Network is a __Custom__ 1.13.2 Skyblock Based Server that has many features for you to explore. With new features added all the time we assure you that you won\'t get bored! <:RioHug:591102792207433729>\n \nWe have a Custom Discord.js Bot dedicated for Goli Network made by Oribuin!\n \nSee all of our server features here:\nhttps://goli.xyz/threads/server-features.16/')
        embed.addField('Our Server IP',
        'golinetwork.online')
        embed.addField('Our Website',
        'https://goli.xyz/')
        embed.addField('Our Store',
        'https://store.goli.xyz/')
        embed.addField('Our Discord',
        'https://discord.gg/4p3gGwg')
        embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')

        message.channel.send('Hey <@&593497609277014026> <:Bri_Wave:579035075102900229>').then(message.channel.send(embed).then(x=> x.react('586613821418897408').then(x.react('591102792207433729'))));
        message.delete();
    }
}