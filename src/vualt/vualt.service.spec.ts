import { Test, TestingModule } from '@nestjs/testing';
import { VualtService } from './vualt.service';

describe('VualtService', () => {
  let service: VualtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VualtService],
    }).compile();

    service = module.get<VualtService>(VualtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
