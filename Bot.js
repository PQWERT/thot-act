const Discord = require('discord.js');
const client = new Discord.Client();

start:
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("p!music",  {type: "PLAYING"});
    
setTimeout(myFunction,9000)
    
function myFunction() {
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"}) ;

repeat: goto start;

client.login(process.env.BOT_TOKEN);
