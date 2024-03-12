import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateGeneralInformationInput {


  @Field()
  fullName: string;

  @Field()
  gender: 'male' | 'female';

  @Field()
  age: string

  @Field()
  education: string

  @Field()
  address: string

  @Field()
  country: string

  @Field()
  cnic: string

  @Field()
  sect: string

  @Field()
  firqah: string

  @Field(() => ID)
  userId: string

}