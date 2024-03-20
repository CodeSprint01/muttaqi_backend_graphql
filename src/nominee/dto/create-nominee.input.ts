import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNomineeInput {


  @Field()
  userId: string

  @Field()
  name: string

  @Field()
  relationship: string

  @Field()
  address: string

  @Field()
  phone: string

  @Field()
  cnic: string


  @Field()
  email: string


}
