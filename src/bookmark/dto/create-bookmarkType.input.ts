import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmark_typeInput {
  @Field()
  name: string
}
