import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDrivingLicenseInput {
  @Field()
  licenseType: string

  @Field()
  issueDate: string

  @Field()
  expiryDate: string

  @Field()
  userId: string
}
