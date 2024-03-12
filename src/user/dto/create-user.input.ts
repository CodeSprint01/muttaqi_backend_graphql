/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateUserInput {

  @Field()
  username: string;


  @Field()
  emailaddress: string;
 
  @Field()
  password: string;



  
}
