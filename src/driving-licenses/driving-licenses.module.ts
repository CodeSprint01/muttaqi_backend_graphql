import { Module } from '@nestjs/common';
import { DrivingLicensesService } from './driving-licenses.service';
import { DrivingLicensesResolver } from './driving-licenses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrivingLicense } from './entities/driving-license.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([DrivingLicense]),
    UserModule
  ],
  providers: [DrivingLicensesResolver, DrivingLicensesService],
})
export class DrivingLicensesModule { }
