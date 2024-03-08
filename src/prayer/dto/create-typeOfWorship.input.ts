/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class  CreateTypeOfWorshipInput {
  @Field()
  type: string
}
