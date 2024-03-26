import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LiabilityService } from './liability.service';
import { Liability } from './entities/liability.entity';
import { CreateLiabilityInput } from './dto/create-liability.input';
import { UpdateLiabilityInput } from './dto/update-liability.input';

@Resolver(() => Liability)
export class LiabilityResolver {
  constructor(private readonly liabilityService: LiabilityService) { }

  // createLiability  mutation
  @Mutation(() => Liability)
  createLiability(@Args('createLiabilityInput') createLiabilityInput: CreateLiabilityInput) {
    return this.liabilityService.create(createLiabilityInput);
  }

  //  findAllLiability query
  @Query(() => [Liability])
  findAllLiability() {
    return this.liabilityService.findAll();
  }

  // findOneLiability query
  @Query(() => Liability)
  findOneLiability(@Args('id') id: string) {
    return this.liabilityService.findOne(id);
  }

  // updateLiability mutation
  @Mutation(() => Liability)
  updateLiability(@Args('updateLiabilityInput') updateLiabilityInput: UpdateLiabilityInput) {
    console.log("🚀 ~ LiabilityResolver ~ updateLiability ~ updateLiabilityInput:", updateLiabilityInput)
    return this.liabilityService.update(updateLiabilityInput.id, updateLiabilityInput);
  }

  // removeLiability mutation  
  @Mutation(() => String) 
async removeLiability(@Args('id') id: string) {
  await this.liabilityService.remove(id);
  return "Liability removed successfully.";
}

}
