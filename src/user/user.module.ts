import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
// import { GeneralInput } from './dto/general_input';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
import { GeneralInformationService } from 'src/general-information/general-information.service';
import { GeneralInformationModule } from 'src/general-information/general-information.module';

@Module({
  providers: [UserResolver, UserService],
  imports: [TypeOrmModule.forFeature([User]), GeneralInformationModule],

})
export class UserModule { }
