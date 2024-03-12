import { CreateFamilyMemberInput } from './create-family-member.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyMemberInput extends PartialType(CreateFamilyMemberInput) {
  @Field(() => Int)
  id: number;
}
