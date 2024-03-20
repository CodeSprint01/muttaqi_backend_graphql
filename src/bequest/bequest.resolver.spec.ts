import { Test, TestingModule } from '@nestjs/testing';
import { BequestResolver } from './bequest.resolver';
import { BequestService } from './bequest.service';

describe('BequestResolver', () => {
  let resolver: BequestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BequestResolver, BequestService],
    }).compile();

    resolver = module.get<BequestResolver>(BequestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
