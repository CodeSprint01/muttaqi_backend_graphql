/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrayerService } from './prayer.service';
import { PrayerResolver } from './prayer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferedPrayer } from './entities/offered-prayer.entity';
import { Prayer } from './entities/prayers-entity';
import { typeOfWorship } from './entities/typeOfWorship-entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OfferedPrayer, Prayer, typeOfWorship]),
    UserModule
  ],
  providers: [PrayerResolver, PrayerService],
  exports: [PrayerService]
})
export class offeredPrayerModule { }
