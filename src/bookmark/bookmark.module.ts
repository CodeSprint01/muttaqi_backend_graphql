import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkResolver } from './bookmark.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { BookmarkType } from './entities/bookmarkType.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmark,BookmarkType, User]),
  JwtModule
  ],
  providers: [BookmarkResolver, BookmarkService, UserService],
  exports: [BookmarkService, UserService]
})
export class BookmarkModule {}
