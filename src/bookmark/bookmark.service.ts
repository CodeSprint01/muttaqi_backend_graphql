import { CreateBookmark_typeInput } from './dto/create-bookmarkType.input';
import { Bookmark_type } from './entities/bookmarkType.entity';
import { Injectable, Controller } from '@nestjs/common';
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
    @InjectRepository(Bookmark_type)
    private readonly bookmark_typeRepository: Repository<Bookmark_type>
  ) {}
  create(createBookmarkInput: CreateBookmarkInput) {
    const { Bookmark_typeId,UserId,  ...otherinput } = createBookmarkInput;
    if (!Bookmark_typeId) {
       throw new Error("Bookmark_type id is required");
    }
    if (!UserId) {
       throw new Error("user id is required");
    }
    const createBookmark = this.bookmarkRepository.create({
       ...otherinput,
       UserId,
       Bookmark_typeId, 
    });
    console.log("🚀 ~ BookmarkService ~ create ~ createBookmark:", createBookmark)
    return  this.bookmarkRepository.save(createBookmark);;
   }

  findAll(): Promise<Bookmark[]> {
    const findAllBookmark = this.bookmarkRepository.find();
    return findAllBookmark
  }

  findOne(id: string) {
    const findOneBookmark = this .bookmarkRepository.findOne({where: {id}})
    return findOneBookmark;
  }
  createBookmarktype(CreateBookmark_typeInput: CreateBookmark_typeInput){
    const createBookmarktype = this.bookmark_typeRepository.create(CreateBookmark_typeInput)
    return this.bookmark_typeRepository.save(createBookmarktype)
  }

  update(id: number, updateBookmarkInput: UpdateBookmarkInput) {
    return `This action updates a #${id} bookmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookmark`;
  }
}
