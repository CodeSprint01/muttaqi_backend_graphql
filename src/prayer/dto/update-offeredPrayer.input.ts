/* eslint-disable prettier/prettier */
import { CreateOfferedPrayerInput } from './create-offeredPrayer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOfferedPrayerInput extends PartialType(CreateOfferedPrayerInput) {
  @Field(() => Int)
  id: number;
}
