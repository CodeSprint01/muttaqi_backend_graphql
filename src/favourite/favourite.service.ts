import { Injectable } from '@nestjs/common';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Favourite } from './entities/favourite.entity';
import { Repository } from 'typeorm';
import { FavouriteType } from './entities/favourite_type.entity';
import { CreateFavouriteTypeInput } from './dto/create-favourite_type.input';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FavouriteService {
  constructor(
    @InjectRepository(Favourite)
    private readonly favouriteRepository: Repository<Favourite>,
    @InjectRepository(FavouriteType)
    private readonly favouriteTypeRepository: Repository<FavouriteType>,
    private userService: UserService
  ) { }

  async create(createFavouriteInput: CreateFavouriteInput) {
    const { userId, favouriteTypeId, ...otherFields } = createFavouriteInput;
    const findUser = await this.userService.findOne(userId);
    if (!findUser) {
      throw new Error('User ID does not exist');
    }
    const findFavouriteTypeId = await this.findOneFavouriteType(favouriteTypeId);
    if (!findFavouriteTypeId) {
      throw new Error("Favourite Type ID does not exist");
    }
    const createfavourite = {
      user: findUser,
      fevtype: findFavouriteTypeId,
      ...otherFields
    }
    const createFavourite = this.favouriteRepository.create(createfavourite);
    return this.favouriteRepository.save(createFavourite);
  }

  findAll(): Promise<Favourite[]> {
    return this.favouriteRepository.find();
  }

  findOne(id: string) {
    return this.favouriteRepository.findOne({
      where: { id },
      relations: ["fevtype"]
    });
  }

  createFavouriteType(createFavouriteTypeInput: CreateFavouriteTypeInput) {
    const createFavouriteType = this.favouriteTypeRepository.create(createFavouriteTypeInput);
    return this.favouriteTypeRepository.save(createFavouriteType);
  }

  findAllFavouriteType(): Promise<FavouriteType[]> {
    return this.favouriteTypeRepository.find();
  }

  findOneFavouriteType(id: string) {
    return this.favouriteTypeRepository.findOne({ where: { id } });
  }

  update(id: number, updateFavouriteInput: UpdateFavouriteInput) {
    return `This action updates a #${id} favourite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favourite`;
  }

  async findOneType(id: string) {
    const findId = await this.favouriteTypeRepository.findOne({ where: { id } });
    if (!findId) {
      throw new Error('This ID does not exist');
    }
    return findId;
  }
}
