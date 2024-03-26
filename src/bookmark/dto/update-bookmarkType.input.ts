import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateBookmarkTypeInput } from './create-bookmarkType.input';

@InputType()
export class UpdateBookmarkTypeInput extends PartialType(CreateBookmarkTypeInput) {
  @Field()
  id: string;
}
