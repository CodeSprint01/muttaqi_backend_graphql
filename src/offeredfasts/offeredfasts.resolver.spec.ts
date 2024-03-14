import { Test, TestingModule } from '@nestjs/testing';
import { OfferedfastsResolver } from './offeredfasts.resolver';
import { OfferedfastsService } from './offeredfasts.service';

describe('OfferedfastsResolver', () => {
  let resolver: OfferedfastsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfferedfastsResolver, OfferedfastsService],
    }).compile();

    resolver = module.get<OfferedfastsResolver>(OfferedfastsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
