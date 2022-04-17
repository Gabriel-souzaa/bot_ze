import { Message, MessageMentions, VoiceChannel } from "discord.js";

class CommandsZe {
  private data: Message;
  private voiceChannel : VoiceChannel;
  private mentions: MessageMentions;

  constructor(botData: Message) {
    this.data = botData;
    this.voiceChannel = botData.member.voice.channel;
    this.mentions = botData.mentions;
  }

  leave() {
    this.voiceChannel.leave();
  }

  join() {
    this.voiceChannel.join();
  }

  music() {

  }

  mentionZe() {
    if ((this.mentions.users.first().id === '330491894393995264') || (this.mentions.users.first().id === '525471845298733057')) {
      this.data.delete();
      this.data.reply(`Vai catar coquinho ${this.data.author.username}!!`);
    }
  }
}

export { CommandsZe };