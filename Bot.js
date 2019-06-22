const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Over you (Sorry b0t anavable) ",  {type: "WATCHING"})

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("OVER YOU", {type: "WATCHING"})
});

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'p!join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('Done!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.login(process.env.BOT_TOKEN);
