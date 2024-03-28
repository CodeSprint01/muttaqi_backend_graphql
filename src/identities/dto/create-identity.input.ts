import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateIdentityInput {
  @Field()
  name: string

  @Field()
  identityNumber: string

  @Field()
  issueDate: string

  @Field()
  expiryDate: string

  @Field()
  vualtId: string
}
