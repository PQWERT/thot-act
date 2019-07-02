const Discord = require('discord.js');
const client = new Discord.Client();

[lbl] start:
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("p!music",  {type: "PLAYING"});
    
setTimeout(9000)
    
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"});

[lbl] repeat: goto start;

client.login(process.env.BOT_TOKEN);