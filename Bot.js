const Discord = require('discord.js');
const client = new Discord.Client();


var a = 0;
beginning: while(true) {
    
client.on('ready', () => 
    client.user.setActivity("p!music",  {type: "PLAYING"});
   
setTimeout(function(){ 
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"} , 15000);

 a++;
   if(i < 424) continue beginning;
      break;
 });
});

client.login(process.env.BOT_TOKEN);
