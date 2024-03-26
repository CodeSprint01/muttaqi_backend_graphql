import { UpdatePrayerInput } from './dto/update-prayer.input';
import { UpdateOfferedPrayerInput } from './dto/update-offeredPrayer.input';
import { UserService } from './../user/user.service';
/* eslint-disable prettier/prettier */
import { OfferedPrayer } from './entities/offered-prayer.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfferedPrayerInput } from './dto/create-offeredPrayer.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prayer } from './entities/prayers-entity';
import { CreatePrayerInput } from './dto/create-prayer.input';
import { typeOfWorship } from './entities/typeOfWorship-entity';
import { CreateTypeOfWorshipInput } from './dto/create-typeOfWorship.input';

@Injectable()
export class PrayerService {
  constructor(
    @InjectRepository(OfferedPrayer)
    private readonly offeredPrayerRepository: Repository<OfferedPrayer>,
    @InjectRepository(Prayer)
    private readonly prayerRepository: Repository<Prayer>,
    @InjectRepository(typeOfWorship)
    private readonly typeOfWorshipRepository: Repository<typeOfWorship>,
    private userService: UserService

  ) { }
  async create(CreateOfferedPrayerInput: CreateOfferedPrayerInput): Promise<OfferedPrayer> {
    const { userId, prayerId,  ...otherInputs } = CreateOfferedPrayerInput;
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException("User does not exist");
    }
    const prayer = await this.findOneprayer(prayerId);
  
    if (!prayer) {
      throw new NotFoundException("Prayer does not exist");
    }
    const createOfferedPrayer = this.offeredPrayerRepository.create({
      user: user,
      prayer: prayer,
      ...otherInputs,
    });
    return this.offeredPrayerRepository.save(createOfferedPrayer);
  }

  async findAllOfferedPrayer(): Promise<OfferedPrayer[]> {
    const findOfferedPrayers = await this.offeredPrayerRepository.find()
    return findOfferedPrayers
  }

  async findOfferedPrayerById(id: string): Promise<OfferedPrayer> {
    const offeredPrayer = this.offeredPrayerRepository.findOne({where:{ id },
    relations: ['prayer', 'user']
    });
    if (!offeredPrayer) {
      throw new NotFoundException(`offered prayer with Id ${id} not found`);
    }
    return offeredPrayer
  }

  async updateOfferedPrayer(id: string, UpdateOfferedPrayerInput: UpdateOfferedPrayerInput) {
    const offeredPrayer = await this.offeredPrayerRepository.findOne({where: {id}})
    if(!offeredPrayer) { 
      throw new Error('this id doest not exist')
    }
    Object.assign(offeredPrayer, UpdateOfferedPrayerInput);
    return await this.offeredPrayerRepository.save(offeredPrayer)

  }

  removeOfferedPrayer(id: string) {
    const removePrayer = this.offeredPrayerRepository.delete(id)
    return removePrayer
  }

  async createPrayer(CreatePrayerInput: CreatePrayerInput): Promise<Prayer> {
    const { typeOfWorshipId, ...otherInputs } = CreatePrayerInput;
    const findTypeOfWorshipId = await this.findOneTypeOfWorship(typeOfWorshipId)

    if(!findTypeOfWorshipId) {
      throw new Error("typeOfWorshipId does not exist")
    }
    const createPrayer = this.prayerRepository.create({
      ...otherInputs,
      typeOfWorship: findTypeOfWorshipId
    })
    return this.prayerRepository.save(createPrayer)
  }

  async findAllprayer(): Promise<Prayer[]> {
    const findprayers = await this.prayerRepository.find()
    return findprayers
  }

  findOneprayer(id: string ) {
    const findPrayerById =  this.prayerRepository.findOne({
      where: {id},
      relations: ['typeOfWorship']
    }
      );
    if(!findPrayerById){
      throw new NotFoundException(`Prayer with ID ${id} not found`);
    }
    return findPrayerById
  }

  async updatePrayer(id: string, UpdatePrayerInput: UpdatePrayerInput){
    const prayer = await this.prayerRepository.findOne({where: {id}})
    if(!prayer){
      throw new Error('this id does not exist')
    }
    Object.assign(prayer, UpdatePrayerInput);
    return await this.prayerRepository.save(prayer)
  }

  removePrayer(id: string) {
    return this.prayerRepository.delete(id)
  }

  async createtypeOfWorship(CreateTypeOfWorshipInput: CreateTypeOfWorshipInput): Promise<typeOfWorship> {
    const createTypeOfWorship = this.typeOfWorshipRepository.create(CreateTypeOfWorshipInput)
    const saveTypeOfWorship = await this.typeOfWorshipRepository.save(createTypeOfWorship)
    return  saveTypeOfWorship;
  }



  findOneTypeOfWorship(id: string) {
    const findId = this.typeOfWorshipRepository.findOne({where: {id}})
    if(!findId) {
     throw new Error("this id does not exist")
    } 
    return findId
  }
}
