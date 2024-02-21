import { CreateGeneralInformationInput } from './create-general-information.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGeneralInformationInput extends PartialType(CreateGeneralInformationInput) {
  @Field(() => Int)
  id: number;
}
