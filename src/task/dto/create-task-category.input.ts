import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskCategoryInput {

  @Field()
  id: string

  @Field()
  type: string

}