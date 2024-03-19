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

  @Column({ type: 'uuid'})
  BookmarkTypeId: string
 
  @Column({ type: 'uuid'})
  UserId: string;

  @Field(() => BookmarkType)
 @ManyToOne(() => BookmarkType, BookmarkType => BookmarkType.bookmarks)
 @JoinColumn({name: 'BookmarkTypeId'})
 BookmarkType: BookmarkType;


 @Field(() => User)
 @ManyToOne(() => User, user => user.bookmarks)
 @JoinColumn({name: 'UserId'})
 user: User;

}
