import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@ObjectType()
@Entity()
export class BookmarkType {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: string

  @Field()
  @Column()
  name: string
 

  @Field(() => [Bookmark])
 @OneToMany(() => Bookmark, bookmark => bookmark.BookmarkType)
 bookmarks: Bookmark[];
}
