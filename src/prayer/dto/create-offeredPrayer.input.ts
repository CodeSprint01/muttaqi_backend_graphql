/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOfferedPrayerInput {
  @Field()
  offeredTime: string

  @Field()
  offeredDate: string

  @Field()
  userId: string
}
