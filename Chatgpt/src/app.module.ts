import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegramModule } from './telegram/telegram.module';
import { BotModule } from './bot/bot.module';
import { PollingModule } from './polling/polling.module';

@Module({
  imports: [
    ContentModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_CONNECTION_STRING'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    TelegramModule,
    BotModule,
    PollingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
