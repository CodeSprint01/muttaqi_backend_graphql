/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePrayerInput {
  @Field({nullable: true})
  fajarPrayer: boolean

  @Field({nullable: true})
  zoharPrayer: boolean

  @Field({nullable: true})
  asarPrayer: boolean

  @Field({nullable: true})
  magrabPrayer: boolean

  @Field({nullable: true})
  ishaPrayer: boolean

  @Field({nullable: true})
  IshraqPrayer : boolean

  @Field({nullable: true})
  TahajjudPrayer: boolean

  @Field({nullable: true})
  ChashtPrayer: boolean

  @Field({nullable: true})
  typeOfWorshipId: string
}
