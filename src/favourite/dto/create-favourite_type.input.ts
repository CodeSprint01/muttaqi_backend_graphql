import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavourite_typeInput {
  @Field()
  name: string
}
