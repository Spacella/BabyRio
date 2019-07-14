const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch')

module.exports = class reptile {
    constructor(){
        this.name = 'reptile',
        this.alias = ['lizard', 'snake'],
        this.usage = 'reptile'
    }
    run(bot, message, args){

        let reddit = [
            "Lizards",
            "reptiles",
            "snakes",
            "Sneks"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

        message.channel.send('Here\'s your Reptiles! <:RioHug:591102792207433729>')
        message.channel.startTyping()

        randomPuppy(subreddit).then(url=> {
            snekfetch.get(url).then(async res => {
                await message.channel.send({
                    files: [{
                        attachment: res.body,
                        name: 'lizard.png'
                    }]
                }).then(() => message.channel.stopTyping());
            }).catch(err => console.error(err));
        }).catch(err => console.error(err));

    }
}