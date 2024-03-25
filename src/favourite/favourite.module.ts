import { Module } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { FavouriteResolver } from './favourite.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favourite } from './entities/favourite.entity';
import { FavouriteType } from './entities/favourite_type.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Favourite, FavouriteType]),
    UserModule
  ],
  providers: [FavouriteResolver, FavouriteService],
  exports: [FavouriteModule]
})
export class FavouriteModule { }
