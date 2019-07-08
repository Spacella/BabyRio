const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const { CommandHandler } = require ('djs-commands');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['+']
});

bot.on('ready', () => {
    console.log(`==========================`)
    console.log(`Bot Loaded: ${bot.user.tag}`)
    console.log(`Bot Author: Ori#0004`)
    console.log(`Bot Version: 0.1`)
    console.log(`Servers: ${bot.guilds.size}`)
    console.log(`Users Using Bot: ${bot.users.size}`)
    console.log(`Library: Discord.js`)
    console.log(`==========================`);
});

bot.on('message', (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(bot, message, args);
    }catch(e){
        console.log(e)
    }
});
const presence_list = [
    "on Goli Network 💕", 
    "on Songoda 💕"
    ];

    bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        bot.user.setActivity(presence_list[index]);
    }, 20000);
});

bot.login(config.token)