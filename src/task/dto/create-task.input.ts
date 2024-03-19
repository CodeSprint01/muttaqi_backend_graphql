import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  nameOfTask: string

  @Field()
  timeOfTask: string

  @Field()
  dateOfTask: string

  @Field()
  isCompleted: string

  @Field()
  descripition: string

  @Field()
  taskCategoryId: string

  @Field()
  userId: string

}