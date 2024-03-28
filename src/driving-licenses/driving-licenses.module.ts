import { Module } from '@nestjs/common';
import { DrivingLicensesService } from './driving-licenses.service';
import { DrivingLicensesResolver } from './driving-licenses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrivingLicense } from './entities/driving-license.entity';
import { UserModule } from 'src/user/user.module';
import { VualtModule } from 'src/vualt/vualt.module';

@Module({
  imports: [TypeOrmModule.forFeature([DrivingLicense]),
    VualtModule
  ],
  providers: [DrivingLicensesResolver, DrivingLicensesService],
})
export class DrivingLicensesModule { }
