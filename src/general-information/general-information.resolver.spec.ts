import { Test, TestingModule } from '@nestjs/testing';
import { GeneralInformationResolver } from './general-information.resolver';
import { GeneralInformationService } from './general-information.service';

describe('GeneralInformationResolver', () => {
  let resolver: GeneralInformationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralInformationResolver, GeneralInformationService],
    }).compile();

    resolver = module.get<GeneralInformationResolver>(GeneralInformationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
