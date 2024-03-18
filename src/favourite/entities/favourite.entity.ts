import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Favourite_type } from './favourite_type.entity';
import { User } from 'src/user/entities/user.entity';

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

  @Field(() => Favourite_type)
  @ManyToOne(() => Favourite_type, Favourite_type => Favourite_type.favourites)
  @JoinColumn({name: 'favouriteTypeId'})
  Favourite_type: Favourite_type;


  @Field(() => User)
  @ManyToOne(() => User, user => user.favourites)
  @JoinColumn({ name: 'userId' })
  user: User;
}
