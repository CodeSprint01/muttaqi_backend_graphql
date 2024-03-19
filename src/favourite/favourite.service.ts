import { Injectable } from '@nestjs/common';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Favourite } from './entities/favourite.entity';
import { Repository } from 'typeorm';
import { FavouriteType } from './entities/favourite_type.entity';
import { CreateFavouriteTypeInput } from './dto/create-favourite_type.input';

@Injectable()
export class FavouriteService {
  constructor(
    @InjectRepository(Favourite)
    private readonly FavouriteRepository: Repository<Favourite>,
    @InjectRepository(FavouriteType)
    private readonly FavouriteTypeRepository: Repository<FavouriteType>

  ) { }
  create(createFavouriteInput: CreateFavouriteInput) {
    const createFavourite = this.FavouriteRepository.create(createFavouriteInput)
    return this.FavouriteRepository.save(createFavourite);
  }

  findAll(): Promise<Favourite[]> {
    return this.FavouriteRepository.find();
  }

  findOne(id: string) {
    return this.FavouriteRepository.findOne({
      where: { id },
      relations: ["FavouriteType"]
    })
  }

  createFavouriteType(CreateFavouriteTypeInput: CreateFavouriteTypeInput) {
    const createFavouriteType = this.FavouriteTypeRepository.create(CreateFavouriteTypeInput)
    return this.FavouriteTypeRepository.save(createFavouriteType)
  }


  findAllFavouriteType(): Promise<FavouriteType[]> {
    return this.FavouriteTypeRepository.find();
  }


  findOneFavouriteType(id: string) {
    return this.FavouriteTypeRepository.findOne({ where: { id } })
  }

  update(id: number, updateFavouriteInput: UpdateFavouriteInput) {
    return `This action updates a #${id} favourite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favourite`;
  }
}
