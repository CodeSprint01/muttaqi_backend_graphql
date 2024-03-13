import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateFamilyMemberInput {

  @Field()
  name: string

  @Field()
  cinic: string

  @Field()
  isAlive: boolean

  @Field(()=> ID)
  relationId: string

  @Field(()=> ID)
  userId: string

}
