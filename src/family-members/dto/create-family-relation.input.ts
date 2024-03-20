import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFamilyRelationInput {
  @Field()
  id: string

  @Field()
  name: string
  
}
