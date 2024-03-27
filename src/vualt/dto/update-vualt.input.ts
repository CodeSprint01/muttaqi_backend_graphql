import { CreateVualtInput } from './create-vualt.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVualtInput extends PartialType(CreateVualtInput) {
  @Field()
  id: string;
}
