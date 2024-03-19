import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkTypeInput {
  @Field()
  name: string
}
