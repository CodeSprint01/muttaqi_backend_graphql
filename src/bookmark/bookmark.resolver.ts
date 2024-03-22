import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from './entities/bookmark.entity';
import { CreateBookmarkInput } from './dto/create-bookmark.input';
import { UpdateBookmarkInput } from './dto/update-bookmark.input';
import { BookmarkType } from './entities/bookmarkType.entity';
import { CreateBookmarkTypeInput } from './dto/create-bookmarkType.input';

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
    return this.bookmarkService.findAll();
  }

// find one bookmark query
  @Mutation(() => Bookmark)
  findOneBookmark(@Args('id') id: string) {
    return this.bookmarkService.findOne(id);
  }

// update bookmark mutation 
  @Mutation(() => Bookmark)
  updateBookmark(@Args('updateBookmarkInput') updateBookmarkInput: UpdateBookmarkInput) {
    return this.bookmarkService.update(updateBookmarkInput.id, updateBookmarkInput);
  }
// remove bookmark mutation
  @Mutation(() => Bookmark)
  removeBookmark(@Args('id') id: string) {
    return this.bookmarkService.remove(id);
  }

  // create BookmarkType mutation
  @Mutation(() => BookmarkType)
  createBookmarkType(@Args("CreateBookmarkTypeInput")CreateBookmarkTypeInput: CreateBookmarkTypeInput) {
    return this.bookmarkService.createBookmarktype(CreateBookmarkTypeInput)
  }

  // find one BookmarkType query
  @Query(() => BookmarkType)
  findOneBookmarkType(@Args('id') id: string) {
    return this.bookmarkService.findOne(id);
  }
}
