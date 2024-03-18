import { Module } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { FavouriteResolver } from './favourite.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favourite } from './entities/favourite.entity';
import { Favourite_type } from './entities/favourite_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favourite, Favourite_type])],
  providers: [FavouriteResolver, FavouriteService],
  exports: [FavouriteService]
})
export class FavouriteModule {}
