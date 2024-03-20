import { Test, TestingModule } from '@nestjs/testing';
import { NomineeResolver } from './nominee.resolver';
import { NomineeService } from './nominee.service';

describe('NomineeResolver', () => {
  let resolver: NomineeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomineeResolver, NomineeService],
    }).compile();

    resolver = module.get<NomineeResolver>(NomineeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
