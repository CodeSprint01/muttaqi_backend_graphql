import { Test, TestingModule } from '@nestjs/testing';
import { BequestService } from './bequest.service';

describe('BequestService', () => {
  let service: BequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BequestService],
    }).compile();

    service = module.get<BequestService>(BequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
