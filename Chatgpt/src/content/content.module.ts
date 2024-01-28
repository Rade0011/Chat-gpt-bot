import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, ContentSchema } from './content.schema';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Content.name, schema: ContentSchema },
    ]),
  ],
  controllers: [ContentController],
  providers: [ContentService, ConfigService],
})
export class ContentModule {}
