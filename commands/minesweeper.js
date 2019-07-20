const Discord = require('discord.js');

module.exports = class mines {
  constructor(){
      this.name = 'mines',
      this.alias = ['minesweep'],
      this.usage = 'mines'
  }

  run(bot, message, args){
    let spoilers = [
      ":one:",
      ":two:",
      ":three:",
      ":four:",
      ":bomb:"
    ]
    let spoils = spoilers[Math.floor(Math.random() * spoilers.length)];
    let embed = new Discord.RichEmbed();

    embed.setTitle('Minesweeper')
    embed.setDescription(`||${spoils}||||${spoils}||||${spoils}||||${spoils}||||${spoils}||\n||${spoils}||||${spoils}||||${spoils}||||${spoils}||||${spoils}||\n||${spoils}||||${spoils}||||${spoils}||||${spoils}||||${spoils}||\n||${spoils}||||${spoils}||||${spoils}||||${spoils}||||${spoils}||\n`)
    embed.setTimestamp();

    message.channel.send(embed)
  }
}