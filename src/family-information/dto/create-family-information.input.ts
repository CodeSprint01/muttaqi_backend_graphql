import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFamilyInformationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
