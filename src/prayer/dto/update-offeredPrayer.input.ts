/* eslint-disable prettier/prettier */
import { CreateOfferedPrayerInput } from './create-offeredPrayer.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOfferedPrayerInput extends PartialType(CreateOfferedPrayerInput) {
  @Field()
  id: string;
}
