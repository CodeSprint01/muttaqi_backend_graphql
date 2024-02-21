import { CreateFamilyInfromationInput } from './create-family-infromation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyInfromationInput extends PartialType(CreateFamilyInfromationInput) {
  @Field(() => Int)
  id: number;
}
