import { Test, TestingModule } from '@nestjs/testing';
import { FamilyInformationResolver } from './family-information.resolver';
import { FamilyInformationService } from './family-information.service';

describe('FamilyInformationResolver', () => {
  let resolver: FamilyInformationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyInformationResolver, FamilyInformationService],
    }).compile();

    resolver = module.get<FamilyInformationResolver>(FamilyInformationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
