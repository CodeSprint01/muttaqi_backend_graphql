import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FavouriteService } from './favourite.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';
import { FavouriteType } from './entities/favourite_type.entity';
import { CreateFavouriteTypeInput } from './dto/create-favourite_type.input';

@Resolver(() => Favourite)
export class FavouriteResolver {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Mutation(() => Favourite)
  createFavourite(@Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput) {
    return this.favouriteService.create(createFavouriteInput);
  }

  @Query(() => [Favourite])
  findAll() {
    return this.favouriteService.findAll();
  }

  @Mutation(() => Favourite)
  findOneFavourite(@Args('id') id: string) {
    return this.favouriteService.findOne(id);
  }

  @Mutation(() => FavouriteType)
  createFavouriteType(@Args('createFavouriteTypeInput') CreateFavouriteTypeInput: CreateFavouriteTypeInput){
    return this.favouriteService.createFavouriteType(CreateFavouriteTypeInput);
  }

  @Query(() => [FavouriteType])
  findAllFavouriteType() {
    return this.favouriteService.findAllFavouriteType();
  }

  @Mutation(() => FavouriteType)
  findOneFavouriteType(@Args('id') id: string) {
    return this.favouriteService.findOneFavouriteType(id);
  }

  @Mutation(() => Favourite)
  updateFavourite(@Args('updateFavouriteInput') updateFavouriteInput: UpdateFavouriteInput) {
    return this.favouriteService.update(updateFavouriteInput.id, updateFavouriteInput);
  }

  @Mutation(() => Favourite)
  removeFavourite(@Args('id', { type: () => Int }) id: number) {
    return this.favouriteService.remove(id);
  }
}
