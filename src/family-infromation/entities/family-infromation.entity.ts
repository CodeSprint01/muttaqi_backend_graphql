import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FamilyInfromation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
