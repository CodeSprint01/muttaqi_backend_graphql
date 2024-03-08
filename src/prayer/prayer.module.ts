/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrayerService } from './prayer.service';
import { PrayerResolver } from './prayer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { offeredPrayer } from './entities/offered-prayer.entity';
import { Prayer } from './entities/prayers-entity';
import { typeOfWorship } from './entities/typeOfWorship-entity';

@Module({
  imports:[
TypeOrmModule.forFeature([offeredPrayer, Prayer, typeOfWorship])
  ],
  providers: [PrayerResolver, PrayerService],
  exports: [PrayerService]
})
export class offeredPrayerModule {}
