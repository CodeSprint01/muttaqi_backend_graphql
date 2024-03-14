import { Test, TestingModule } from '@nestjs/testing';
import { OfferedfastsService } from './offeredfasts.service';

describe('OfferedfastsService', () => {
  let service: OfferedfastsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferedfastsService],
    }).compile();

    service = module.get<OfferedfastsService>(OfferedfastsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
