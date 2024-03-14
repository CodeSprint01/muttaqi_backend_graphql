import { CreateOfferedfastInput } from './create-offeredfast.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOfferedfastInput extends PartialType(CreateOfferedfastInput) {
  @Field()
  id: string;
}
