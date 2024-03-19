import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { FavouriteType } from './favourite_type.entity';

@ObjectType()
@Entity()
export class Favourite {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id : string

  @Field()
  @Column()
  content: string

  @Column({type: 'uuid'})
  favouriteTypeId: string

  @Column()
  userId: string

  @Field(() => FavouriteType)
  @ManyToOne(() => FavouriteType, FavouriteType => FavouriteType.favourites)
  @JoinColumn({name: 'favouriteTypeId'})
  FavouriteType: FavouriteType;


  @Field(() => User)
  @ManyToOne(() => User, user => user.favourites)
  @JoinColumn({ name: 'userId' })
  user: User;
}
