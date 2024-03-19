import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Favourite } from './favourite.entity';

@ObjectType()
@Entity()
export class FavouriteType {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id : string

  @Field()
  @Column()
  name: string


  @OneToMany(() => Favourite, favourite => favourite.FavouriteType)
  favourites: Favourite[];
}
