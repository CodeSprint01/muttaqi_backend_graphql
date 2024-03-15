import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark_type } from './bookmarkType.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Entity()
export class Bookmark {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  content: string

  @Column({ type: 'uuid'})
  Bookmark_typeId: string
 
  @Column({ type: 'uuid'})
  UserId: string;

  @Field(() => Bookmark_type)
 @ManyToOne(() => Bookmark_type, bookmark_type => bookmark_type.bookmarks)
 @JoinColumn({name: 'Bookmark_typeId'})
 bookmark_type: Bookmark_type;


 @Field(() => User)
 @ManyToOne(() => User, user => user.bookmarks)
 @JoinColumn({name: 'UserId'})
 user: User;

}
