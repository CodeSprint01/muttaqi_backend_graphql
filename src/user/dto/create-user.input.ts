/* eslint-disable prettier/prettier */
import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class CreateUserInput {
  @Field(() => Int, {nullable: true})
  id: string;


  @Field()
  username: string;


  @Field()
  emailaddress: string;
 
  @Field()
  password: string;
}
