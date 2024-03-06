import { Test, TestingModule } from '@nestjs/testing';
import { FamilyInformationService } from './family-information.service';

describe('FamilyInformationService', () => {
  let service: FamilyInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FamilyInformationService],
    }).compile();

    service = module.get<FamilyInformationService>(FamilyInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
