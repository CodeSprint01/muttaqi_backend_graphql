import { CreateFavouriteTypeInput } from './dto/create-FavouriteType.input';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FavouriteService } from './favourite.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';
import { FavouriteType } from './entities/FavouriteType.entity';

@Resolver(() => Favourite)
export class FavouriteResolver {
  constructor(private readonly favouriteService: FavouriteService) {}
// create favourite mutation 
  @Mutation(() => Favourite)
  createFavourite(@Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput) {
    return this.favouriteService.create(createFavouriteInput);
  }


// find all favourite qurey
  @Query(() => [Favourite])
  findAll() {
    return this.favouriteService.findAll();
  }


// find one favourite mutation 
  @Mutation(() => Favourite)
  findOneFavourite(@Args('id') id: string) {
    return this.favouriteService.findOne(id);
  }


// create favourite mutation  
@Mutation(() => FavouriteType)
createFavouriteType(@Args('CreateFavouriteTypeInput')CreateFavouriteTypeInput: CreateFavouriteTypeInput){
return this.favouriteService.createFavouriteType(CreateFavouriteTypeInput)
}


// find all createFavouriteType query 
@Query(() => [FavouriteType])
findAllFavouriteType() {
  return this.favouriteService.findAll();
}


// find one FavouriteType mutation
@Mutation(() => FavouriteType)
  findOneFavouriteType(@Args('id') id: string) {
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
