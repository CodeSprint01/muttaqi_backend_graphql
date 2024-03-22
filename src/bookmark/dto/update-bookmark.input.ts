import { CreateBookmarkInput } from './create-bookmark.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookmarkInput extends PartialType(CreateBookmarkInput) {
  @Field()
  id: string;
}
