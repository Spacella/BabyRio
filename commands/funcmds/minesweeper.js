const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');

module.exports = class mines {
  constructor(){
      this.name = 'mines',
      this.alias = [''],
      this.usage = 'mines';
  }

  run(bot, message, args){
    let embed = new Discord.RichEmbed();

    const command = args[0];
    const rows = parseInt(args[1]);
    const columns = parseInt(args[2]);
    const mines = parseInt(args[3]);

    if (!rows) {
    return message.channel.send(':warning: Please enter a number of rows.\n \nExample: `+mines 6 6 5`');
    }

    if (!columns) {
      return message.channel.send(':warning: Please enter a number of columns.\n \nExample: `+mines 6 6 5`');
    }

    if (!mines) {
      return message.channel.send(':warning: Please enter a number of mines.\n \nExample: `+mines 6 6 5`');
    }

    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();

    embed.setColor("76b3fc")
    embed.setDescription(`${matrix}`)
    embed.setAuthor('Minesweeper')
    embed.setTimestamp()

    return matrix
    ? message.channel.send(embed)
    : message.channel.send(':warning: You have provided inavlid numbers');
  }
};