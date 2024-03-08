/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrayerInput {
  @Field()
  prayerName : string

  @Field()
  typeOfPrayer: string

  @Field()
  startingTime: string

  @Field()
  endingTime: string
}
