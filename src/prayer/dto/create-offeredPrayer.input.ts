/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOfferedPrayerInput {

  @Field()
  userId: string

  @Field()
  prayerId: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
