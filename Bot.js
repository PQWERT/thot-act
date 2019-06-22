const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity("Over you (Sorry b0t anavable) ",  {type: "WATCHING"})
})

client.login(process.env.BOT_TOKEN);
