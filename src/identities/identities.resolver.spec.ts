import { Test, TestingModule } from '@nestjs/testing';
import { IdentitiesResolver } from './identities.resolver';
import { IdentitiesService } from './identities.service';

describe('IdentitiesResolver', () => {
  let resolver: IdentitiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentitiesResolver, IdentitiesService],
    }).compile();

    resolver = module.get<IdentitiesResolver>(IdentitiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
