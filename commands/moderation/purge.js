const Discord = require("discord.js");
// So it knows what its using, Without this it wouldn't function as discord bot.

module.exports = class purge {
    // Command Handler
    constructor(){
        this.name = 'purge',
        // Name of command
        this.alias = ['delete'],
        // Alias of Command
        this.usage = 'purge'
        // Main Command
    }

    run(bot, message, args){
        let embed = new Discord.RichEmbed()
        //Allows the bot to use the Rich Embed.

        var command = args[0];
        // Detects what the command is
        var purged = args.slice(1).join(" ");
        // Detects how many messages you wish to delete

        if (message.content === (args[0])) return message.channel.send('Please include the number of messages you wish to delete.')
        // If the message just contains '+purge' it returns this

        if (message.member.hasPermission('ADMINISTRATOR')) {
            // If the user is an administrator in the discord server it will return this

         embed.setColor("76b3fc") 
         embed.setDescription(`Purged Messages from this channel\n \nAmount Purged: **${purged}**`)
         //The contents of the Embed

         message.delete()
         //Deletes the message that was sent by the user
         setTimeout(function() {
             //Start of the timing functions
            message.channel.bulkDelete(args[1]);
            //deletes the messages above 
            message.channel.send(embed)
            //Sends Embed Above
          }, 500);
          //Waits 0.5 Seconds before it does Stuff inside setTimeout(function()

          setTimeout(function() {
              message.delete(embed)
          }, 1000);
          //waits 10 seconds and will end up deleting the embed

         console.log(`${purged} Messages deleted by ${message.author.tag}`)
         //Logs the user deleting messages using bots



         if (message.guild.id === '')
        } else {
            //If the user isn't an admin it will return this 
            message.channel.send('You are not an admin! <:PanCop:589141466727841793>')

        }}
    }