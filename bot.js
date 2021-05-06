const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});
require("dotenv").config()

client.on('ready', () => {
  console.log("BOT Ready to GO!!!");
});
client.on('message', msg => {
    if (msg.content.includes("!order")) {
      msg.reply('Pong!');
    }
  });

client.on('messageDelete', msg => {
    msg.reply("Stop Deleting Messages")
});

client.login(process.env.BOT_TOKEN);