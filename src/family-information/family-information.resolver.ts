import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyInformationService } from './family-information.service';
import { FamilyInformation } from './entities/family-information.entity';
import { CreateFamilyInformationInput } from './dto/create-family-information.input';
import { UpdateFamilyInformationInput } from './dto/update-family-information.input';

@Resolver(() => FamilyInformation)
export class FamilyInformationResolver {
  constructor(private readonly familyInformationService: FamilyInformationService) {}

  @Mutation(() => FamilyInformation)
  createFamilyInformation(@Args('createFamilyInformationInput') createFamilyInformationInput: CreateFamilyInformationInput) {
    return this.familyInformationService.create(createFamilyInformationInput);
  }

  @Query(() => [FamilyInformation], { name: 'familyInformation' })
  findAll() {
    return this.familyInformationService.findAll();
  }

  @Query(() => FamilyInformation, { name: 'familyInformation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.familyInformationService.findOne(id);
  }

  @Mutation(() => FamilyInformation)
  updateFamilyInformation(@Args('updateFamilyInformationInput') updateFamilyInformationInput: UpdateFamilyInformationInput) {
    return this.familyInformationService.update(updateFamilyInformationInput.id, updateFamilyInformationInput);
  }

  @Mutation(() => FamilyInformation)
  removeFamilyInformation(@Args('id', { type: () => Int }) id: number) {
    return this.familyInformationService.remove(id);
  }
}
