/* eslint-disable prettier/prettier */
import { CreateGeneralInformationInput } from './create-general-information.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGeneralInformationInput extends PartialType(CreateGeneralInformationInput) {
  @Field()
  id: string;
}
