import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GeneralInformationService } from './general-information.service';
import { GeneralInformation } from './entities/general-information.entity';
import { CreateGeneralInformationInput } from './dto/create-general-information.input';
import { UpdateGeneralInformationInput } from './dto/update-general-information.input';

@Resolver(() => GeneralInformation)
export class GeneralInformationResolver {
  constructor(private readonly generalInformationService: GeneralInformationService) {}

  @Mutation(() => GeneralInformation)
  createGeneralInformation(@Args('createGeneralInformationInput') createGeneralInformationInput: CreateGeneralInformationInput) {
    return this.generalInformationService.create(createGeneralInformationInput);
  }

  @Query(() => [GeneralInformation], { name: 'generalInformation' })
  findAll() {
    return this.generalInformationService.findAll();
  }

  @Query(() => GeneralInformation, { name: 'generalInformation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.generalInformationService.findOne(id);
  }

  @Mutation(() => GeneralInformation)
  updateGeneralInformation(@Args('updateGeneralInformationInput') updateGeneralInformationInput: UpdateGeneralInformationInput) {
    return this.generalInformationService.update(updateGeneralInformationInput.id, updateGeneralInformationInput);
  }
  
  @Mutation(() => GeneralInformation)
  removeGeneralInformation(@Args('id', { type: () => Int }) id: number) {
    return this.generalInformationService.remove(id);
  }
}
