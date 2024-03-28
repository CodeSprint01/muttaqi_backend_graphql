import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoginInput {
  @Field()
  account: string

  @Field()
  userName: string

  @Field()
  Password: string

  @Field()
  vualtId: string
  
}
