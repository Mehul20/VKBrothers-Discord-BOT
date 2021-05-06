const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});
require("dotenv").config()
const pollEmbed = require('discord.js-poll-embed');

client.on('ready', () => {
  console.log("BOT Ready to GO!!!");
});


var cars = ["Account Opened",
 "Invoice Created", 
 "Delivered",
"Some Problems"];

const defEmojiList = [
	'\u0031\u20E3',
	'\u0032\u20E3',
	'\u0033\u20E3',
	'\u0034\u20E3',
	'\u0035\u20E3',
	'\u0036\u20E3',
	'\u0037\u20E3',
	'\u0038\u20E3',
	'\u0039\u20E3',
	'\uD83D\uDD1F'
];


client.on('message', msg => {
    if (msg.content.includes("!order")) {
      msg.reply('New Order has come, VK Brothers BOT will track the progress!');
      var okay = pollEmbed(msg,"Status of Order",cars,0,defEmojiList,'\u274C');
      okay.then(function () {
        console.log("Promise Resolved");
   }).catch(function () {
        console.log("Promise Rejected");
   });
    }
  });

client.on('messageDelete', msg => {
    msg.reply("Stop Deleting Messages")
});

client.login(process.env.BOT_TOKEN);


