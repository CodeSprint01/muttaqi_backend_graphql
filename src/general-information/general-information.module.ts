import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { GeneralInformationResolver } from './general-information.resolver';
import { GeneralInformation } from './entities/general-information.entity';
import { GeneralInformationService } from './general-information.service';

@Module({
  imports: [TypeOrmModule.forFeature([GeneralInformation]), UserModule],
  providers: [GeneralInformationResolver, GeneralInformationService],
  exports: [GeneralInformationService]
})
export class GeneralInformationModule {}

