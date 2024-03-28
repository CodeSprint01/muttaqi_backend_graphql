import { Test, TestingModule } from '@nestjs/testing';
import { SecureNotesService } from './secure-notes.service';

describe('SecureNotesService', () => {
  let service: SecureNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecureNotesService],
    }).compile();

    service = module.get<SecureNotesService>(SecureNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
