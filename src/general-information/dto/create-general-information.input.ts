import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGeneralInformationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;



  @Field(() => String, { description: 'Example field (placeholder)' })
  address: string;

  
  @Field(() => String, { description: 'Example field (placeholder)' })
  age: string;


  @Field(() =>Int)
  userid: number

}
