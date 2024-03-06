import { Module } from '@nestjs/common';
import { FamilyInformationService } from './family-information.service';
import { FamilyInformationResolver } from './family-information.resolver';

@Module({
  providers: [FamilyInformationResolver, FamilyInformationService],
})
export class FamilyInformationModule {}
