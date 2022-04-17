import { Message, MessageMentions, VoiceChannel } from "discord.js";
import { MusicBot } from "./MusicBot";

class CommandsZe {
  private data: Message;
  private voiceChannel : VoiceChannel;
  private mentions: MessageMentions;

  constructor(botData: Message) {
    this.data = botData;
    this.voiceChannel = botData.member.voice.channel;
    this.mentions = botData.mentions;
  }

  async leave() {
    this.voiceChannel.leave();
  }

  async join() {
    this.voiceChannel.join();
  }

  async music(content: string) {
    if (!this.voiceChannel)
      return this.data.channel.send(
        "Você precisa estar em um canal de voz para tocar música!!"
      );

    const permissions = this.voiceChannel.permissionsFor(this.data.client.user);

    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return this.data.channel.send(
        "Preciso das permissões para participar e falar no seu canal de voz!"
      );
    }

    const musics = new MusicBot(this.data);

    await musics.execute(content, this.data.guild.id, this.voiceChannel);
  }

  async mentionZe() {
    if ((this.mentions.users.first().id === '330491894393995264') || (this.mentions.users.first().id === '525471845298733057')) {
      this.data.delete();
      this.data.reply(`Vai catar coquinho ${this.data.author.username}!!`);
    }
  }
}

export { CommandsZe };