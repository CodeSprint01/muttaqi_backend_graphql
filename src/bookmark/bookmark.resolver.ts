import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './entities/bookmark.entity';
import { CreateBookmarkInput } from './dto/create-bookmark.input';
import { UpdateBookmarkInput } from './dto/update-bookmark.input';
import { BookmarkType } from './entities/bookmarkType.entity';
import { CreateBookmarkTypeInput } from './dto/create-bookmarkType.input';
import { UpdateBookmarkTypeInput } from './dto/update-bookmarkType.input';
import { ReturnDocument } from 'typeorm';

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
  findAllBookmark() {
    return this.bookmarkService.findAllBookmark();
  }

// find one bookmark query
  @Mutation(() => Bookmark)
  findOneBookmark(@Args('id') id: string) {
    return this.bookmarkService.findOneBookmark(id);
  }

// update bookmark mutation 
  @Mutation(() => Bookmark)
  updateBookmark(@Args('updateBookmarkInput') updateBookmarkInput: UpdateBookmarkInput) {
    return this.bookmarkService.updateBookmark(updateBookmarkInput.id, updateBookmarkInput);
  }
// remove bookmark mutation
  @Mutation(() => Bookmark)
  removeBookmark(@Args('id') id: string) {
    return this.bookmarkService.removeBookmark(id);
  }

  // create BookmarkType mutation
  @Mutation(() => BookmarkType)
  createBookmarkType(@Args("CreateBookmarkTypeInput")CreateBookmarkTypeInput: CreateBookmarkTypeInput) {
    return this.bookmarkService.createBookmarktype(CreateBookmarkTypeInput)
  }

  // find one BookmarkType query
  @Query(() => BookmarkType)
  findOneBookmarkType(@Args('id') id: string) {
    return this.bookmarkService.findOneBookmarkType(id);
  }

  // find all bookmark type
  @Query(() => BookmarkType)
  findAllType(){
    return this.bookmarkService.findAllType()
  }

  //  UpdateBookmarkType mutation
  @Mutation(() => BookmarkType)
  UpdateBookmarkType(@Args('UpdateBookmarkTypeInput')UpdateBookmarkTypeInput: UpdateBookmarkTypeInput){
    return this.bookmarkService.UpdateBookmarkType(UpdateBookmarkTypeInput.id, UpdateBookmarkTypeInput)
  }

  // remove bookmark type
  @Mutation(() => BookmarkType) 
  removeBookmarkType(@Args('id') id: string){
    return this.bookmarkService.removeBookmarkType(id)
  }
}
