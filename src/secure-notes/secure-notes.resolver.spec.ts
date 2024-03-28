import { Test, TestingModule } from '@nestjs/testing';
import { SecureNotesResolver } from './secure-notes.resolver';
import { SecureNotesService } from './secure-notes.service';

describe('SecureNotesResolver', () => {
  let resolver: SecureNotesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecureNotesResolver, SecureNotesService],
    }).compile();

    resolver = module.get<SecureNotesResolver>(SecureNotesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
