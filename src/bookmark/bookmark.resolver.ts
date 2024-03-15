import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './entities/bookmark.entity';
import { CreateBookmarkInput } from './dto/create-bookmark.input';
import { UpdateBookmarkInput } from './dto/update-bookmark.input';
import { Bookmark_type } from './entities/bookmarkType.entity';
import { CreateBookmark_typeInput } from './dto/create-bookmarkType.input';

@Resolver(() => Bookmark)
export class BookmarkResolver {
  constructor(private readonly bookmarkService: BookmarkService) {}

// create bookmark utation
  @Mutation(() => Bookmark)
  createBookmark(@Args('createBookmarkInput') createBookmarkInput: CreateBookmarkInput) {
    return this.bookmarkService.create(createBookmarkInput);
  }

//find all bookmark query 
  @Query(() => [Bookmark])
  findAll() {
    return this.bookmarkService.findAll();
  }

// find one bookmark query
  @Query(() => Bookmark)
  findOne(@Args('id') id: string) {
    return this.bookmarkService.findOne(id);
  }

// update bookmark mutation 
  @Mutation(() => Bookmark)
  updateBookmark(@Args('updateBookmarkInput') updateBookmarkInput: UpdateBookmarkInput) {
    return this.bookmarkService.update(updateBookmarkInput.id, updateBookmarkInput);
  }
// remove bookmark mutation
  @Mutation(() => Bookmark)
  removeBookmark(@Args('id', { type: () => Int }) id: number) {
    return this.bookmarkService.remove(id);
  }

  // create bookmark_type mutation
  @Mutation(() => Bookmark_type)
  createBookmark_type(@Args("CreateBookmark_typeInput")CreateBookmark_typeInput: CreateBookmark_typeInput) {
    return this.bookmarkService.createBookmarktype(CreateBookmark_typeInput)
  }
}
