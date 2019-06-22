const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Over you (Sorry b0t anavable) ",  {type: "WATCHING"})

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("OVER YOU", {type: "WATCHING"})
})

client.login("NTY4Mzk0MTY1OTY5NDg1ODM3.XQEL7A.xm5fBF-IGhwnFG6uMy7EFNBm0EI") // Replace XXXXX with your bot token