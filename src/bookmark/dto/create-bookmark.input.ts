import { BookmarkType } from './../entities/bookmarkType.entity';
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkInput {

  @Field()
  content: string

  @Field()
  BookmarkTypeId: string

  @Field()
  UserId: string;
}
