require('dotenv').config();

import { Message, Client } from "discord.js";
import { CommandsZe } from "./CommandsZe";

const COMMAND_ZE = process.env.COMMAND_ZE;
const bot = new Client();

bot.on('ready', async () => {
  console.log(`Bot iniciado!!`);
});

bot.on('message', (data: Message) => {
  const commandsZe = new CommandsZe(data);

  if (data.author.bot) return;

  //Entrar no canal de voz
  if (data.content === `${COMMAND_ZE} entrar`)
    return commandsZe.join();

  //Sair no canal de voz
  if (data.content === `${COMMAND_ZE} sair`)
    return commandsZe.leave();

  //Ao marcar o zé replica uma mensagem
  if (Number(data.mentions.members.size) > 0)
    return commandsZe.mentionZe();
});

bot.login(process.env.TOKEN_DISCORD);
