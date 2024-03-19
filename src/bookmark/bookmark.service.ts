import { CreateBookmarkTypeInput } from './dto/create-bookmarkType.input';
import { BookmarkType } from './entities/bookmarkType.entity';
import { Injectable } from '@nestjs/common';
import { CreateBookmarkInput } from './dto/create-bookmark.input';
import { UpdateBookmarkInput } from './dto/update-bookmark.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(Bookmark)
    private readonly bookmarkRepository: Repository<Bookmark>,
    @InjectRepository(BookmarkType)
    private readonly BookmarkTypeRepository: Repository<BookmarkType>
  ) {}
  create(createBookmarkInput: CreateBookmarkInput) {
    const { BookmarkTypeId,UserId,  ...otherinput } = createBookmarkInput;
    if (!BookmarkTypeId) {
       throw new Error("BookmarkType id is required");
    }
    if (!UserId) {
       throw new Error("user id is required");
    }
    const createBookmark = this.bookmarkRepository.create({
       ...otherinput,
       UserId,
       BookmarkTypeId, 
    });
    console.log("🚀 ~ BookmarkService ~ create ~ createBookmark:", createBookmark)
    return  this.bookmarkRepository.save(createBookmark);;
   }

  findAll(): Promise<Bookmark[]> {
    const findAllBookmark = this.bookmarkRepository.find();
    return findAllBookmark
  }

  findOne(id: string) {
    const findOneBookmark = this .bookmarkRepository.findOne({
      where: {id},
    relations: ['BookmarkType']
  })
    return findOneBookmark;
  }
  createBookmarktype(CreateBookmarkTypeInput: CreateBookmarkTypeInput){
    const createBookmarktype = this.BookmarkTypeRepository.create(CreateBookmarkTypeInput)
    return this.BookmarkTypeRepository.save(createBookmarktype)
  }

  update(id: number, updateBookmarkInput: UpdateBookmarkInput) {
    return `This action updates a #${id} bookmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookmark`;
  }
}
