const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Anime (S0rry b0t unavailable) ",  {type: "WATCHING"})

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("OVER YOU", {type: "WATCHING"})
});

client.login(process.env.BOT_TOKEN);
