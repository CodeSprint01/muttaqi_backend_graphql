import { Test, TestingModule } from '@nestjs/testing';
import { FamilyMembersResolver } from './family-members.resolver';
import { FamilyMembersService } from './family-members.service';

describe('FamilyMembersResolver', () => {
  let resolver: FamilyMembersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyMembersResolver, FamilyMembersService],
    }).compile();

    resolver = module.get<FamilyMembersResolver>(FamilyMembersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
