/* eslint-disable prettier/prettier */
import { InputType, Field, Int } from '@nestjs/graphql';
// import { CreateGeneralInformationInput } from 'src/general-information/dto/create-general-information.input';
@InputType()
export class CreateUserInput {
  @Field(() => Int, {nullable: true})
  id: number;


  @Field()
  username: string;


  @Field()
  emailaddress: string;
 
  @Field()
  password: string;


  // @Field(()=> CreateGeneralInformationInput, {nullable: true})
  // generalInformation: CreateGeneralInformationInput;
  
}
