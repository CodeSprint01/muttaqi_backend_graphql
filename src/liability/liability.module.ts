import { Module } from '@nestjs/common';
import { LiabilityService } from './liability.service';
import { LiabilityResolver } from './liability.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Liability } from './entities/liability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Liability])],
  providers: [LiabilityResolver, LiabilityService],
  exports: [LiabilityService]
})
export class LiabilityModule {}
