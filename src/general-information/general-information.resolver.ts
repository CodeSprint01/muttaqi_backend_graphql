/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { GeneralInformation } from './entities/general-information.entity';
import { GeneralInformationService } from './general-information.service';
import { CreateGeneralInformationInput } from './dto/create-general-information.input';
import { UpdateGeneralInformationInput } from './dto/update-general-information.input';

@Resolver(() => GeneralInformation)
export class GeneralInformationResolver {
  constructor(private readonly generalInformationService: GeneralInformationService) {}

  @Mutation(() => GeneralInformation)
  createGeneralInformation(@Args('createGeneralInformationInput') createGeneralInformationInput: CreateGeneralInformationInput) {
    // console.log("ðŸš€ ~ GeneralInformationResolver ~ createGeneralInformation ~ createGeneralInformationInput:", createGeneralInformationInput)
    return this.generalInformationService.create(createGeneralInformationInput);
  }

  @Query(() => [GeneralInformation], { name: 'generalInformation' })
  findAll() {
    return this.generalInformationService.findAll();
  }

  @Query(() => GeneralInformation, { name: 'generalInformation' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.generalInformationService.findOne(id);
  }

  @Mutation(() => GeneralInformation)
  updateGeneralInformation(@Args('updateGeneralInformationInput') updateGeneralInformationInput: UpdateGeneralInformationInput) {
    return this.generalInformationService.update(updateGeneralInformationInput.id, updateGeneralInformationInput);
  }
  
  @Mutation(() => GeneralInformation)
  removeGeneralInformation(@Args('id') id: string) {
    return this.generalInformationService.remove(id);
  }
}