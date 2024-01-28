import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TelegramController],
  providers: [TelegramService, ConfigService],
})
export class TelegramModule {}
