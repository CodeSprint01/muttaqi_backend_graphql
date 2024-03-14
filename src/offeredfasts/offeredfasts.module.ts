import { Module } from '@nestjs/common';
import { OfferedfastsService } from './offeredfasts.service';
import { OfferedfastsResolver } from './offeredfasts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offeredfast } from './entities/offeredfast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offeredfast])],
  providers: [OfferedfastsResolver, OfferedfastsService],
  exports:[OfferedfastsService]
})
export class OfferedfastsModule {}
