import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FavouriteService } from './favourite.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';

@Resolver(() => Favourite)
export class FavouriteResolver {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Mutation(() => Favourite)
  createFavourite(@Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput) {
    return this.favouriteService.create(createFavouriteInput);
  }

  @Query(() => [Favourite], { name: 'favourite' })
  findAll() {
    return this.favouriteService.findAll();
  }

  @Query(() => Favourite, { name: 'favourite' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.favouriteService.findOne(id);
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
