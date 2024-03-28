import { VualtService } from './../vualt/vualt.service';
import { Injectable } from '@nestjs/common';
import { CreateBankAccountInput } from './dto/create-bank-account.input';
import { UpdateBankAccountInput } from './dto/update-bank-account.input';
import { InjectRepository } from '@nestjs/typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectRepository(BankAccount)
    private readonly bankAccountRepository: Repository<BankAccount>,
    private VualtService : VualtService
  ){}
  async create(createBankAccountInput: CreateBankAccountInput) {
    const { vualtId, ...otherInputs } = createBankAccountInput;
    const vualt = await this.VualtService.findOne(vualtId)
    const createBankAccount = this.bankAccountRepository.create({
      vualt: vualt,
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
