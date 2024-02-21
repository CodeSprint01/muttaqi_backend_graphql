import { Module } from '@nestjs/common';
import { FamilyInfromationService } from './family-infromation.service';
import { FamilyInfromationResolver } from './family-infromation.resolver';

@Module({
  providers: [FamilyInfromationResolver, FamilyInfromationService],
})
export class FamilyInfromationModule {}
