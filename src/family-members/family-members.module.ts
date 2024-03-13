import { Module } from '@nestjs/common';
import { FamilyMemberService } from './family-members.service';
import { FamilyMemberResolver } from './family-members.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyMember} from './entities/family-member.entity';
import { FamilyRelation } from './entities/family-relations.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([FamilyMember, FamilyRelation]), UserModule],
  providers: [FamilyMemberResolver, FamilyMemberService],
  exports: [FamilyMembersModule]
})
export class FamilyMembersModule {}
