require('dotenv').config();

import { Message, Client } from "discord.js";
import { CommandsZe } from "./CommandsZe";

const COMMAND_ZE = process.env.COMMAND_ZE;
const bot = new Client();

bot.on('ready', async () => {
  console.log(`Bot Connecting!`);
});

bot.once('reconnecting', () => {
 console.log('Bot Reconnecting!');
});

bot.once('disconnect', () => {
 console.log('Bot Disconnect!');
});

bot.on('message', async (data: Message) => {
  const commandsZe = new CommandsZe(data);

  //Se o próprio bot for o autor da ação
  if (data.author.bot) return;

  //Ao marcar o zé replica uma mensagem
  if (data.mentions.members.size > 0)
    return await commandsZe.mentionZe();

  //Verifica prefixo do bot
  if (!data.content.startsWith(COMMAND_ZE)) return;

  await comands(data, commandsZe);
});

async function comands(data: Message, commandsZe: CommandsZe){
  if(data.content.includes(`${COMMAND_ZE} play`)){
    commandsZe.music(data.content);
  } else if(data.content.includes(`${COMMAND_ZE} entrar`)){
    commandsZe.join();
  } else if(data.content.includes(`${COMMAND_ZE} sair`)){
    commandsZe.leave();
  } else{
    data.channel.send("Comando inválido!");
  }
}

bot.login(process.env.TOKEN_DISCORD);
