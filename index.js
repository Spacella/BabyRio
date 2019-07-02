const { Client, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const { token, prefix, owners } = require('./config.json');

const bot = new Client();
bot.commands = new Collection();
bot.aliases = new Collection();
bot.prefix = prefix;
bot.owners = owners;

const load = dirs => {
  const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
  for (const file of commands) {
    const pull = require(`../commands/${dirs}/${file}`);
    bot.commands.set(pull.help.name, pull);
    if (pull.help.aliases) pull.help.aliases.forEach(a => bot.aliases.set(a, pull.help.name));
  }
};
const commandsDir = readdirSync('./commands/');
commandsDir.forEach(x => load(x));

bot.on("ready", async  () => {
    console.log(`==========================\nBot Loaded: ${client.user.tag}\nBot Author: Ori#0004\nBot Version: 0.1\nServers: ${client.guilds.size}\nUsers Using Bot: ${client.users.size}\nLibrary: Discord.js\n==========================`)
});

bot.on('message', async message => {

  
  if(message.author.bot || message.channel.type !== 'text') return;

  const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(!message.content.startsWith(bot.prefix)) return;
  const commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  if(commandfile) commandfile.run(bot, message, args);

});
const presence_list = [
    "Being Rewritten 💕", 
    "w/ Discord.js 💕",
    ];

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        bot.user.setActivity(presence_list[index]);
    }, 20000);
});
bot.login(token).catch(e => console.log(e));