import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreatePrayerInput } from "./create-prayer.input";

@InputType()
export class UpdatePrayerInput extends PartialType(CreatePrayerInput) {
  @Field()
  id: string;
}