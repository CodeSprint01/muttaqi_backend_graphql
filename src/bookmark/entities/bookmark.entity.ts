import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookmarkType } from './bookmarkType.entity';
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

  @Field(() => BookmarkType)
 @ManyToOne(() => BookmarkType, BookmarkType => BookmarkType.bookmarks)
 @JoinColumn({name: 'bookmarkTypeId'})
 BookmarkType: BookmarkType;


 @Field(() => User)
 @ManyToOne(() => User, user => user.bookmarks)
 @JoinColumn({name: 'userId'})
 user: User;

}
