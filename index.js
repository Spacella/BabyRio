const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { CommandHandler } = require ('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['+']
});

bot.on('ready', () => {
    console.log(`==========================`);
    console.log(`Bot Loaded: ${bot.user.tag}`);
    console.log(`Bot Author: Ori#0004`);
    console.log(`Servers: ${bot.guilds.size}`);
    console.log(`Users Using Bot: ${bot.users.size}`);
    console.log(`Library: Discord.js`);
    console.log(`==========================`);
});

bot.on('message', (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(/ +/g);
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(bot, message, args);
    }catch(e){
        console.log(e);
    }
});
bot.on('ready', () => {
    bot.user.setActivity('Goli Network 💙', { type: 'WATCHING'});
});
bot.on('guildMemberAdd', member => {
    let embed = new Discord.RichEmbed();

    if (member.guild.id === '505872328538718233') {

    embed.setAuthor("Goli Network's Official Discord!");
    embed.setColor("76b3fc");
    embed.setDescription(`Welcome to Goli Network, <@${member.id}>! Please real all of our server rules and keep a positive attitude throughout the entire server. :heart: \nWe hope you have fun and enjoy your stay!\n \nLink your Discord -> Minecraft on \`golinetwork.online\` Version 1.13.2!`);
    embed.setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png");
    embed.setThumbnail(`${member.user.displayAvatarURL}`);
    embed.setFooter("Type /discord link on goli network.online & follow the instructions to link your account!");
    embed.addBlankField(true);
    embed.addField("Join our Minecraft server!",
    "golinetwork.online");
    embed.addField("Follow our twitter!",
    "https://twitter.com/GoliNetwork");
    embed.addField("Goli Network Website",
    "https://goli.xyz/");

    bot.channels.get("546857401266208770").send(embed).then(x=> x.react('👋'));
    member.addRoles('555414882636267540', '564056444253634560');
    console.log(`${member.user.tag} just joined!`);
    }
});
bot.on('guildMemberRemove', member => {
    let embed = new Discord.RichEmbed();

    if (member.guild.id === '505872328538718233') {

    embed.setAuthor("Member Left");
    embed.setDescription(`${member.user.tag} just left` + ` the server!`);
    embed.setThumbnail(`${member.user.displayAvatarURL}`);
    embed.setColor("76b3fc")

    bot.channels.get("584340782673297458").send(embed);
    console.log(`${member.user.tag} Just left`);
    }
});
bot.on('message', message => {
    if (!message.guild) return;

    if (message.guild.id === '505872328538718233');
    
    if (message.content.includes('https://discord.gg', 'https://discord.gg/invite')) {
        message.channel.send(`<:PanCop:589141466727841793> Don\'t post invite links in chat, <@${message.author.id}>!`);
        message.author.lastMessage.delete();
    }
});
bot.login(config.token);
