const Discord = require('discord.js');
const client = new Discord.Client();

Loop1:
client.on('ready', () => {
    client.user.setActivity("p!music",  {type: "PLAYING"});
   setTimeout(function(){ 
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"} , 15000);
    });
continue loop1;
} 
});
client.login(process.env.BOT_TOKEN);
