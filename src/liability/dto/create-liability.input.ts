import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLiabilityInput {
  @Field()
  name: string

  @Field()
  type: string

  @Field()
  value: string

  @Field()
  userId: string
}