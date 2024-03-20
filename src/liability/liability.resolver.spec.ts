import { Test, TestingModule } from '@nestjs/testing';
import { LiabilityResolver } from './liability.resolver';
import { LiabilityService } from './liability.service';

describe('LiabilityResolver', () => {
  let resolver: LiabilityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiabilityResolver, LiabilityService],
    }).compile();

    resolver = module.get<LiabilityResolver>(LiabilityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
