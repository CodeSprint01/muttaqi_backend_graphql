/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { PrayerResolver } from './prayer.resolver';
import { PrayerService } from './prayer.service';

describe('PrayerResolver', () => {
  let resolver: PrayerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrayerResolver, PrayerService],
    }).compile();

    resolver = module.get<PrayerResolver>(PrayerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
