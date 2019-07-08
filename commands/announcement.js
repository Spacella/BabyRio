const Discord = require("discord.js");

module.exports = class announcement {
    constructor(){
        this.name = 'announcement',
        this.alias = ['announce'],
        this.usage = '+announcement'
    }

    run(bot, message, args){
        if (message.author.id === '345406020450779149')

        let embed = new Discord.RichEmbed()

        .setDescription("Announcement Text")
        .setTitle('New Announcemen Incoming')
        .setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
        .setTimestamp()
        .setColor(0x008080)


    message.channel.send(embed);
    message.delete();
    }
}
/*
Emotes for Announcements, ignore this :)
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