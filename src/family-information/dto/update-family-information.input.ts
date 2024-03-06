import { CreateFamilyInformationInput } from './create-family-information.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyInformationInput extends PartialType(CreateFamilyInformationInput) {
  @Field(() => Int)
  id: number;
}
