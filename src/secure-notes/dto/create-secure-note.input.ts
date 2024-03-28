import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSecureNoteInput {
  @Field()
  title: string

  @Field()
  content: string

  @Field()
  vualtId: string
}
