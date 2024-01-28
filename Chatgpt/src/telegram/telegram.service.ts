import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {
  private readonly bot;

  constructor(private readonly configService: ConfigService) {
    const token = this.configService.get('TELEGRAM_BOT_TOKEN')
    this.bot = new TelegramBot(token)
    };
  
  async sendMessage(chatId: number, text: any) {
    await this.bot.sendMessage(chatId, text)
  }
}



