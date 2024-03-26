import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVualtInput {
  @Field()
  password: string

}
