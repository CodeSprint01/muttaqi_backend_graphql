import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFamilyMemberInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
