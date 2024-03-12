/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrayerInput {
  @Field()
  fajarPrayer: boolean

  @Field()
  zoharPrayer: boolean

  @Field()
  asarPrayer: boolean

  @Field()
  magrabPrayer: boolean

  @Field()
  ishaPrayer: boolean

  @Field()
  IshraqPrayer : boolean

  @Field()
  TahajjudPrayer: boolean

  @Field()
  ChashtPrayer: boolean

  @Field()
  typeOfWorshipId: string
}
