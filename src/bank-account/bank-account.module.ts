import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountResolver } from './bank-account.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './entities/bank-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount]),
    UserModule
  ],
  providers: [BankAccountResolver, BankAccountService],
})
export class BankAccountModule { }
