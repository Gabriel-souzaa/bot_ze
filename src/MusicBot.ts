import { Message } from "discord.js";
import ytdl from "ytdl-core";

class MusicBot {
  private data: Message;
  private queue = new Map();
  private argMusic = "";

  constructor(botData: Message){
    this.data = botData;
  }

  async execute(content: string, guildId: any, voiceChannel){
    const serverQueue = this.queue.get(guildId);
    const args = content.split(" ");

    args.forEach((arg, index) => {
      if(index > 1){
        this.argMusic = this.argMusic.concat(arg, "+");
      }
    });
  }

  async stop(){

  }

  async skip(){

  }

  async play(guildId, song) {
    
  }
}

export {MusicBot};