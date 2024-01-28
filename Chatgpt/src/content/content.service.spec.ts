import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { content } from './content.fixtures';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentService],
    }).compile();

    service = module.get<ContentService>(ContentService);
  });

  it('should be response', async () => {
    const response = await service.main(content.context, content.prompt)
    expect(response).toBeDefined();
  });
});
