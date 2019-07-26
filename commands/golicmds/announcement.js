const Discord = require("discord.js");

module.exports = class announcement {
    constructor(){
        this.name = 'announcement',
        this.alias = ['announce'],
        this.usage = 'announcement'
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        //announcment variables
        var command = args[0];
        var ann = args.slice(1).join(" ");

        embed.setAuthor('New Server Announcement')
        embed.setDescription(`${ann}`)
        embed.setFooter(`Announcement by: ${message.author.tag}`)
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
        embed.setThumbnail('https://cdn.discordapp.com/attachments/577491181697630244/602920909086392519/golilogo.png')
        embed.setColor(0xF08080)

        if (message.author.id === '345406020450779149', '568919303580024862')

        message.channel.send('Hey @everyone <:Bri_Wave:579035075102900229>').then(message.channel.send(embed).then(x=> x.react('586613821418897408')))
        message.delete()
    }
}
/*
Emojis, ignore this :)
<:thonk:568875386243514398>
<:RioHug:591102792207433729>
<:PanWot:589141480501805240>
<:PanCop:589141466727841793>
<:Pan_Love:586613821418897408>
<:Bri_Wave:579035075102900229>
<:Bri_Hyped:582685037833617419>
<:Bri_Crying:580035067791933441>
<:Bri_Bat:581630507259789333>
*/