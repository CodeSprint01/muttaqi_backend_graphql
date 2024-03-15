import { Bookmark_type } from './../entities/bookmarkType.entity';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkInput {

  @Field()
  content: string

  @Field()
  Bookmark_typeId: string

  @Field()
  UserId: string;
}
