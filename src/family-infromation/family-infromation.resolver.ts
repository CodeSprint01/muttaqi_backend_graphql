import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FamilyInfromationService } from './family-infromation.service';
import { FamilyInfromation } from './entities/family-infromation.entity';
import { CreateFamilyInfromationInput } from './dto/create-family-infromation.input';
import { UpdateFamilyInfromationInput } from './dto/update-family-infromation.input';

@Resolver(() => FamilyInfromation)
export class FamilyInfromationResolver {
  constructor(private readonly familyInfromationService: FamilyInfromationService) {}

  @Mutation(() => FamilyInfromation)
  createFamilyInfromation(@Args('createFamilyInfromationInput') createFamilyInfromationInput: CreateFamilyInfromationInput) {
    return this.familyInfromationService.create(createFamilyInfromationInput);
  }

  @Query(() => [FamilyInfromation], { name: 'familyInfromation' })
  findAll() {
    return this.familyInfromationService.findAll();
  }

  @Query(() => FamilyInfromation, { name: 'familyInfromation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.familyInfromationService.findOne(id);
  }

  @Mutation(() => FamilyInfromation)
  updateFamilyInfromation(@Args('updateFamilyInfromationInput') updateFamilyInfromationInput: UpdateFamilyInfromationInput) {
    return this.familyInfromationService.update(updateFamilyInfromationInput.id, updateFamilyInfromationInput);
  }

  @Mutation(() => FamilyInfromation)
  removeFamilyInfromation(@Args('id', { type: () => Int }) id: number) {
    return this.familyInfromationService.remove(id);
  }
}
