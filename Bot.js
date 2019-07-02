const Discord = require('discord.js');
const client = new Discord.Client();

 while (true) {
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("p!music",  {type: "PLAYING"});
    
setTimeout(myFunction,9000)
    
function myFunction() {
client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"}) ;
 }
})
});
client.login(process.env.BOT_TOKEN);
