import { Test, TestingModule } from '@nestjs/testing';
import { DrivingLicensesService } from './driving-licenses.service';

describe('DrivingLicensesService', () => {
  let service: DrivingLicensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrivingLicensesService],
    }).compile();

    service = module.get<DrivingLicensesService>(DrivingLicensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
