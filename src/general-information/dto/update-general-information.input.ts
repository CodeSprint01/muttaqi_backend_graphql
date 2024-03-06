import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateGeneralInformationInput } from './create-general-information.input';

@InputType()
export class UpdateGeneralInformationInput extends PartialType(CreateGeneralInformationInput) {
  @Field()
  id: string;
}