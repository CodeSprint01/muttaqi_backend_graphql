import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { Bookmark_type } from './entities/bookmarkType.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark,Bookmark_type, User])],
  providers: [BookmarkResolver, BookmarkService],
  exports: [BookmarkService]
})
export class BookmarkModule {}
