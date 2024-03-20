import { CreateBequestInput } from './create-bequest.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBequestInput extends PartialType(CreateBequestInput) {
  @Field(() => Int)
  id: number;
}
