import { Module } from '@nestjs/common';
import { OfferedfastsService } from './offeredfasts.service';
import { OfferedfastsResolver } from './offeredfasts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offeredfast } from './entities/offeredfast.entity';
import { UserModule } from 'src/user/user.module';
import { offeredPrayerModule } from 'src/prayer/prayer.module';

@Module({
  imports: [TypeOrmModule.forFeature([Offeredfast]),
    UserModule, offeredPrayerModule
  ],
  providers: [OfferedfastsResolver, OfferedfastsService],
  exports: [OfferedfastsModule]
})
export class OfferedfastsModule { }
