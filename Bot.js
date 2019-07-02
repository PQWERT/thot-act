const Discord = require('discord.js');
const client = new Discord.Client();

var a = '';
Loop:
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("p!music",  {type: "PLAYING"});
   
setTimeout(function(){ 
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"} , 15000);

continue loop;

client.login(process.env.BOT_TOKEN);
