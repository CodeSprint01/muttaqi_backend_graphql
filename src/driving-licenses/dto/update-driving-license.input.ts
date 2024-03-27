import { CreateDrivingLicenseInput } from './create-driving-license.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDrivingLicenseInput extends PartialType(CreateDrivingLicenseInput) {
  @Field()
  id: string;
}
