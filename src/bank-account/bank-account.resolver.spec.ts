import { Test, TestingModule } from '@nestjs/testing';
import { BankAccountResolver } from './bank-account.resolver';
import { BankAccountService } from './bank-account.service';

describe('BankAccountResolver', () => {
  let resolver: BankAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankAccountResolver, BankAccountService],
    }).compile();

    resolver = module.get<BankAccountResolver>(BankAccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
