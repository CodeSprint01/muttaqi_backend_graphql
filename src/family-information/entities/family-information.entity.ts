import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FamilyInformation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
