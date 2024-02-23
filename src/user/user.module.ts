/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { GeneralInformationModule } from 'src/general-information/general-information.module';
@Module({
  imports: [TypeOrmModule.forFeature([User]), GeneralInformationModule],
  providers: [UserResolver, UserService],
  exports: [UserService]

})
export class UserModule { }
