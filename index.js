require('dotenv').config();

const { Client } = require('discord.js');

const bot = new Client();

bot.login(process.env.TOKEN_DISCORD);

bot.on('ready', async () => {
  console.log(`Bot ${bot.user.username} iniciado!!`);
});

bot.on('message', (data) => {
  if (data.author.bot) return;
  try {
    data.author.send("Não enche meu saco!!!");

    if ((data.mentions.users.first().id === '330491894393995264') || (data.mentions.users.first().id === '525471845298733057')) {
      data.delete();
      data.reply(`Vai catar coquinho ${data.author.username}!!`);
    }

    // const voiceChannel = data.member.voice.channel;
    // voiceChannel.join();
  }
  catch (err) {
    throw new Error(err);
  }

})
