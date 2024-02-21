import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateGeneralInformationInput } from 'src/general-information/dto/create-general-information.input';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
// import { GeneralInformation } from './general_information';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;


  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
 

  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;


  @Field(()=> CreateGeneralInformationInput, {nullable: true})
  generalInformation: CreateGeneralInformationInput;
  
}
