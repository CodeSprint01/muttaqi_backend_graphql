import { Module } from '@nestjs/common';
import { GeneralInformationService } from './general-information.service';
import { GeneralInformationResolver } from './general-information.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralInformation } from './entities/general-information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ GeneralInformation])],

  providers: [GeneralInformationResolver, GeneralInformationService],
  exports: [GeneralInformationService]
})
export class GeneralInformationModule {}
