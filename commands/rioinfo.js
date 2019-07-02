module.exports = {
	name: 'rioinfo',
	description: 'Information about Baby Rio',
	command(message) {
        const embed = new RichEmbed()
        .setTitle('-=[Baby Rio Info]=-')
        .setAuthor('Baby Rio Info', `${client.user.avatarURL}`)
        .addField('Rio Version',
        '1.31')
        .addField(`Author`,
        '[Ori#0004](https://github.com/Oribuin/)')
        .addField(`Library`, 
        '[discord.js](https://discord.js.org/#/)')
        .addField('Servers:',
        `${client.guilds.size}`)
        .addField('Users using BabyRio',
        `${client.users.size}`)
        .setColor(0xF08080)
        .setThumbnail(`${message.author.avatarURL}`)
        .setFooter(`Requested by: ${message.author.tag}`)
        .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
        .setTimestamp()

        message.channel.send({embed});
        console.log()
    },
};