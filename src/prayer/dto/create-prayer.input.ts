/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrayerInput {
  @Field()
  fajarPrayer: string

  @Field()
  zoharPrayer: string

  @Field()
  asarPrayer: string

  @Field()
  magrabPrayer: string

  @Field()
  ishaPrayer: string

  @Field()
  IshraqPrayer : string

  @Field()
  TahajjudPrayer: string

  @Field()
  ChashtPrayer: string

  @Field()
  typeOfWorshipId: string
}
