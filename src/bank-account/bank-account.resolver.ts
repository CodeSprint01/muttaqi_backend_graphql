import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BankAccountService } from './bank-account.service';
import { BankAccount } from './entities/bank-account.entity';
import { CreateBankAccountInput } from './dto/create-bank-account.input';
import { UpdateBankAccountInput } from './dto/update-bank-account.input';

@Resolver(() => BankAccount)
export class BankAccountResolver {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Mutation(() => BankAccount)
  createBankAccount(@Args('createBankAccountInput') createBankAccountInput: CreateBankAccountInput) {
    console.log("🚀 ~ BankAccountResolver ~ createBankAccount ~ createBankAccountInput:", createBankAccountInput)
    return this.bankAccountService.create(createBankAccountInput);
  }

  @Query(() => [BankAccount])
  findAllBankAccount() {
    return this.bankAccountService.findAll();
  }

  @Query(() => BankAccount)
  findOneBankAccount(@Args('id') id: string) {
    return this.bankAccountService.findOne(id);
  }

  @Mutation(() => BankAccount)
  updateBankAccount(@Args('updateBankAccountInput') updateBankAccountInput: UpdateBankAccountInput) {
    return this.bankAccountService.update(updateBankAccountInput.id, updateBankAccountInput);
  }

  @Mutation(() => BankAccount)
  removeBankAccount(@Args('id') id: string) {
    return this.bankAccountService.remove(id);
  }
}
