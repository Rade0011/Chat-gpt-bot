import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, ContentSchema } from 'src/content/content.schema';
import { ContentService } from 'src/content/content.service';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Content.name, schema: ContentSchema}
    ])
  ],
  providers: [BotService, ContentService, ConfigService],
})
export class BotModule {}
