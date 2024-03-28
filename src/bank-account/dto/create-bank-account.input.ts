import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBankAccountInput {
  @Field()
  bankName: string

  @Field()
  accountNumber: string; 

  @Field()
  userId: string
}
