import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyMembersService } from './family-members.service';
import { FamilyMembers } from './entities/family-member.entity';
import { CreateFamilyMemberInput } from './dto/create-family-member.input';
import { UpdateFamilyMemberInput } from './dto/update-family-member.input';

@Resolver(() => FamilyMembers)
export class FamilyMembersResolver {
  constructor(private readonly familyMembersService: FamilyMembersService) {}

  @Mutation(() => FamilyMembers)
  createFamilyMember(@Args('createFamilyMemberInput') createFamilyMemberInput: CreateFamilyMemberInput) {
    return this.familyMembersService.create(createFamilyMemberInput);
  }

  @Query(() => [FamilyMembers], { name: 'familyMembers' })
  findAll() {
    return this.familyMembersService.findAll();
  }

  @Query(() => FamilyMembers, { name: 'familyMember' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.familyMembersService.findOne(id);
  }

  @Mutation(() => FamilyMembers)
  updateFamilyMember(@Args('updateFamilyMemberInput') updateFamilyMemberInput: UpdateFamilyMemberInput) {
    return this.familyMembersService.update(updateFamilyMemberInput.id, updateFamilyMemberInput);
  }

  @Mutation(() => FamilyMembers)
  removeFamilyMember(@Args('id', { type: () => Int }) id: number) {
    return this.familyMembersService.remove(id);
  }
}
