import { UserService } from 'src/user/user.service';
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
    private readonly BookmarkTypeRepository: Repository<BookmarkType>,
    private UserService: UserService
  ) {}
   async create(createBookmarkInput: CreateBookmarkInput) {
    const { bookmarkTypeId, userId,  ...otherinput } = createBookmarkInput;

    const findBookmarkTypeId = await this.findOneBookmarkType(bookmarkTypeId);
    if (!findBookmarkTypeId) {
        throw new Error("BookmarkType does not exist");
    }

    const findUserid = await  this.UserService.findOne(userId);
    if (!findUserid) {
        throw new Error("user id does not exist");
    }
    const createBookmarkData = {
      ...otherinput,
      bookmarkType: findBookmarkTypeId,
      user: findUserid,
    }
    const createBookmark = this.bookmarkRepository.create(createBookmarkData);
    return this.bookmarkRepository.save(createBookmark);
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

  findOneBookmarkType(id : string){
    return this.BookmarkTypeRepository.findOne({where: {id}})
  }

  async update(id: string, updateBookmarkInput: UpdateBookmarkInput) {
    const findId = await this.bookmarkRepository.findOne({where: {id}});
    if(!findId){
      throw new Error("bookmark id not found")
    }
    Object.assign(findId, updateBookmarkInput);
    return await this.bookmarkRepository.save(findId)

  }

  remove(id: string) {
    return this.bookmarkRepository.delete(id);
  }
}
