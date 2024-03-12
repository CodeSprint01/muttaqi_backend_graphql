import { Module } from '@nestjs/common';
import { FamilyMembersService } from './family-members.service';
import { FamilyMembersResolver } from './family-members.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMembers } from './entities/family-member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FamilyMembers])],
  providers: [FamilyMembersResolver, FamilyMembersService],
  exports: [FamilyMembersModule]
})
export class FamilyMembersModule {}
