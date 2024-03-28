import { Injectable } from '@nestjs/common';
import { CreateBankAccountInput } from './dto/create-bank-account.input';
import { UpdateBankAccountInput } from './dto/update-bank-account.input';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectRepository(BankAccount)
    private readonly bankAccountRepository: Repository<BankAccount>,
    private userService:UserService
  ){}
  async create(createBankAccountInput: CreateBankAccountInput) {
    const { userId, ...otherInputs } = createBankAccountInput;
    const user = await this.userService.findOne(userId)
    const createBankAccount = this.bankAccountRepository.create({
      user: user,
      ...otherInputs
    })
    console.log("🚀 ~ BankAccountService ~ create ~ createBankAccount:", createBankAccount)
    return this.bankAccountRepository.save(createBankAccount); 
  }

  findAll() {
    return this.bankAccountRepository.find();
  }

  findOne(id: string) {
    const bankAccount =  this.bankAccountRepository.findOne({where: {id}});
    if(!bankAccount) {
      throw new Error('this account does not exist')
    }
    return bankAccount
  }

  async update(id: string, updateBankAccountInput: UpdateBankAccountInput) {
    const bankAccount = await this.findOne(id);
    Object.assign(bankAccount, updateBankAccountInput)
    return this.bankAccountRepository.save(bankAccount)

  }

  remove(id: string) {
    return this.bankAccountRepository.delete(id);
  }
}
