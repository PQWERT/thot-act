const Discord = require('discord.js');
const client = new Discord.Client();

labelname:
wilde (ture)
client.on('ready', () => {
    client.user.setActivity("p!music",  {type: "PLAYING"});
    setTimeout(function(){ 
    client.user.setActivity("Sorry Music only for now",  {type: "LISTENING"} , 15000);
    });
continue labelname;
} 
});
client.login(process.env.BOT_TOKEN);
