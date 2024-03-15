import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@ObjectType()
@Entity()
export class Bookmark_type {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string
 

  @Field(() => [Bookmark])
 @OneToMany(() => Bookmark, bookmark => bookmark.bookmark_type)
 bookmarks: Bookmark[];
}
