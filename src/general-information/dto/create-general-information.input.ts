/* eslint-disable prettier/prettier */
import { InputType,  Field,  ID } from '@nestjs/graphql';

@InputType()
export class CreateGeneralInformationInput {

  @Field()
  address: string;

  
  @Field()
  age: string;


  @Field(() => ID)
  userid: string

}
