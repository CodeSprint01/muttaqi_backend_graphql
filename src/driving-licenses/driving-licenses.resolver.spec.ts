import { Test, TestingModule } from '@nestjs/testing';
import { DrivingLicensesResolver } from './driving-licenses.resolver';
import { DrivingLicensesService } from './driving-licenses.service';

describe('DrivingLicensesResolver', () => {
  let resolver: DrivingLicensesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrivingLicensesResolver, DrivingLicensesService],
    }).compile();

    resolver = module.get<DrivingLicensesResolver>(DrivingLicensesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
