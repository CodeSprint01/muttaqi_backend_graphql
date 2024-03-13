/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrayerInput {

  @Field()
  id: string

  @Field()
  prayerName: string

  @Field({ nullable: true })
  typeOfWorshipId: string
}
