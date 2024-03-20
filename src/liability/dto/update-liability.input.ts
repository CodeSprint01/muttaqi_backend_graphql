import { CreateLiabilityInput } from './create-liability.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLiabilityInput extends PartialType(CreateLiabilityInput) {
  @Field()
  id: string;
}
