const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');

module.exports = class mines {
  constructor(){
      this.name = 'mines',
      this.alias = ['minesweep'],
      this.usage = 'mines'
  }

  run(bot, message, args){
    const minesweeper = new Minesweeper();
    minesweeper.start()
  }
}