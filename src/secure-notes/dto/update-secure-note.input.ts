import { CreateSecureNoteInput } from './create-secure-note.input';
import { InputType, Field,  PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSecureNoteInput extends PartialType(CreateSecureNoteInput) {
  @Field()
  id: string;
}
