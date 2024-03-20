import { CreateNomineeInput } from './create-nominee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNomineeInput extends PartialType(CreateNomineeInput) {
  @Field(() => String)
  id: string;
}
