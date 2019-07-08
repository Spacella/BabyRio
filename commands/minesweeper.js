const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');
const minesweeper = new Minesweeper({
    rows: 12,
    columns: 16,
    mines: 20,
    emote: 'tada',
    returnType: 'code',
  });
  minesweeper.start();
module.exports = class minesweeper {
    constructor(){
        this.name = 'minesweeper',
        this.alias = ['mines', 'minesweep'],
        this.usage = 'minesweeper'
    }
    run(bot, message, args){
        const content = message.content.split(' ');

        const rows = parseInt(args[0]);
        const columns = parseInt(args[1]);
        const mines = parseInt(args[2]);

        if (!rows) {
            return message.channel.send(':warning: Please provide the number of rows.');
          }
        
          if (!columns) {
            return message.channel.send(':warning: Please provide the number of columns.');
          }
        
          if (!mines) {
            return message.channel.send(':warning: Please provide the number of mines.');
          }
        
          const minesweeper = new Minesweeper({ rows, columns, mines });
          const matrix = minesweeper.start();
        
          return matrix
            ? message.channel.send(matrix)
            : message.channel.send(':warning: You have provided invalid data.');
    }
}