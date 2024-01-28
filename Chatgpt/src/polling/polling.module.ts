import { Module } from '@nestjs/common';
import { PollingService } from './polling.service';
import { PollingController } from './polling.controller';
import { ConfigService } from '@nestjs/config';
import { TelegramService } from 'src/telegram/telegram.service';
import { BotService } from 'src/bot/bot.service';
import { ContentService } from 'src/content/content.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, ContentSchema } from 'src/content/content.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Content.name, schema: ContentSchema },
    ]),
  ],
  controllers: [PollingController],
  providers: [PollingService, ContentService, BotService, TelegramService, ConfigService],
})
export class PollingModule {}
