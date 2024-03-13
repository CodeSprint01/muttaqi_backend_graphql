import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyMemberService } from './family-members.service';
import { FamilyMember } from './entities/family-member.entity';
import { CreateFamilyMemberInput } from './dto/create-family-member.input';
import { UpdateFamilyMemberInput } from './dto/update-family-member.input';
import { FamilyRelation } from './entities/family-relations.entity';
import { CreateFamilyRelationInput } from './dto/create-family-relation.input';

@Resolver(() => FamilyMember)
export class FamilyMemberResolver {
  constructor(private readonly familyMemberService: FamilyMemberService) {}

  @Mutation(() => FamilyMember)
  createFamilyMember(@Args('createFamilyMemberInput') createFamilyMemberInput: CreateFamilyMemberInput) {
    return this.familyMemberService.create(createFamilyMemberInput);
  }

  @Query(() => [FamilyMember], { name: 'familyMember' })
  findAll() {
    return this.familyMemberService.findAll();
  }

  @Query(() => FamilyMember, { name: 'familyMember' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.familyMemberService.findOne(id);
  }

  @Mutation(() => FamilyMember)
  updateFamilyMember(@Args('updateFamilyMemberInput') updateFamilyMemberInput: UpdateFamilyMemberInput) {
    return this.familyMemberService.update(updateFamilyMemberInput.id, updateFamilyMemberInput);
  }

  @Mutation(() => FamilyMember)
  removeFamilyMember(@Args('id', { type: () => Int }) id: number) {
    return this.familyMemberService.remove(id);
  }

  
  @Mutation(()=> FamilyRelation)
  createRelation(@Args('craeteRelationinput') createRelationInput: CreateFamilyRelationInput){
    return this.familyMemberService.createRelations(createRelationInput);
  }
}
