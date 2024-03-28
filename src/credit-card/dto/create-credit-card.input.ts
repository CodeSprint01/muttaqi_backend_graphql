import { InputType,  Field } from '@nestjs/graphql';

@InputType()
export class CreateCreditCardInput {
  @Field()
  cardNumber: string

  @Field()
  nameOnCard: string

  @Field()
  expiryDate: string

  @Field()
  cvc: string

  @Field()
  vualtId: string
}
