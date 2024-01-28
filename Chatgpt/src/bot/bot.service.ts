import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { ContentService } from 'src/content/content.service';

@Injectable()
export class BotService {
  constructor(private readonly contentService: ContentService)
  {}
 
  async textRequest(text: string) {
    return await this.contentService.main(text)
  }
}
