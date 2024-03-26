import { Test, TestingModule } from '@nestjs/testing';
import { VualtResolver } from './vualt.resolver';
import { VualtService } from './vualt.service';

describe('VualtResolver', () => {
  let resolver: VualtResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VualtResolver, VualtService],
    }).compile();

    resolver = module.get<VualtResolver>(VualtResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
