import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Favourite } from './favourite.entity';

@ObjectType()
@Entity()
export class Favourite_type {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id : string

  @Field()
  @Column()
  name: string


  @OneToMany(() => Favourite, favourite => favourite.Favourite_type)
  favourites: Favourite[];
}
