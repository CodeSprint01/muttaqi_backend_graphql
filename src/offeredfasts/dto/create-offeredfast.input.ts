import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOfferedfastInput {
  @Field()
  createdAt: string 

  @Field()
  updateAt: string
}
