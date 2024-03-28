import { CreateIdentityInput } from './create-identity.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIdentityInput extends PartialType(CreateIdentityInput) {
  @Field()
  id: string;
}
