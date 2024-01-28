import { Injectable } from '@nestjs/common';
import { CreatePollingDto } from './dto/create-polling.dto';
import { UpdatePollingDto } from './dto/update-polling.dto';
import { ConfigService } from '@nestjs/config';
import { TelegramService } from 'src/telegram/telegram.service';
import { BotService } from 'src/bot/bot.service';
import { ContentService } from 'src/content/content.service';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class PollingService {
  private bot;

  constructor(private telegramService: TelegramService,
              private botService: BotService,
              private contentService: ContentService,
              private readonly configService: ConfigService)
{
  const token = this.configService.get('TELEGRAM_BOT_TOKEN');
        this.bot = new TelegramBot(token, {polling: true});
        this.bot.onText(/.*/, (msg) => this.onText(msg))
}
  async onText(msg: TelegramBot.Message) {
    const {chat, text} = msg
    if (!text) {
      return ('Введите текст')
    }

    const response = await this.botService.textRequest(text)

    if (!response) {
      return ('Нет чата')
    }

    this.telegramService.sendMessage(chat.id, response)
  }
}
