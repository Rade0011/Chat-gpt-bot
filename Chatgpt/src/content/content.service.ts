import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { DEFAULT } from 'constants/constans';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { Content, ContentDocument } from './content.schema';


@Injectable()
export class ContentService {
  constructor(@InjectModel(Content.name)
              private content:Model<ContentDocument>,
              private readonly configService:ConfigService)
              {}
              
  private openai = new OpenAI({
    apiKey: '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',
  });
  
  async main(prompt: string, context: string = DEFAULT.CONTEXT ) {
    const completion = await this.openai.chat.completions.create({
      messages: [
         {role: "system", content: context},
         {role: "user", content: prompt},
      ],
      model: "gpt-3.5-turbo",
    });
  
    return completion.choices[0].message.content;
  }
}