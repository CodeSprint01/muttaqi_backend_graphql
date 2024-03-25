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
import { error } from 'console';

@Injectable()
export class PrayerService {
  constructor(
    @InjectRepository(OfferedPrayer)
    private readonly offeredPrayerRepository: Repository<OfferedPrayer>,
    @InjectRepository(Prayer)
    private readonly prayerRepository: Repository<Prayer>,
    @InjectRepository(typeOfWorship)
    private readonly typeOfWorshipRepository: Repository<typeOfWorship>
  ) { }
  create(CreateOfferedPrayerInput: CreateOfferedPrayerInput): Promise<OfferedPrayer> {

    const {userId,prayerId,  ...otherInputs} = CreateOfferedPrayerInput;
    if(!userId) {
      throw new Error("userId is required")
    }
    if(!prayerId) {
      throw new Error("prayerId is required")
    }
    const createOfferedPrayer = this.offeredPrayerRepository.create({
      ...otherInputs,
      userId,
      prayerId,
    });
    const saveOfferedPreayer = this.offeredPrayerRepository.save(createOfferedPrayer)
    return saveOfferedPreayer;
  }

  async createPrayer(CreatePrayerInput: CreatePrayerInput): Promise<Prayer> {
    const { typeOfWorshipId, ...otherInputs } = CreatePrayerInput;
    const findId =await this.findOneTypeId(typeOfWorshipId)
    if(!findId) {
      throw new Error("id does not exist")
    }
    const creatPra = {
      typeID: findId,
      ...otherInputs
    }
    const createPrayer = this.prayerRepository.create(creatPra)
    return this.prayerRepository.save(createPrayer)
    
  }

  async createtypeOfWorship(CreateTypeOfWorshipInput: CreateTypeOfWorshipInput): Promise<typeOfWorship> {
    const createTypeOfWorship = this.typeOfWorshipRepository.create(CreateTypeOfWorshipInput)
    const saveTypeOfWorship = await this.typeOfWorshipRepository.save(createTypeOfWorship)
    return  saveTypeOfWorship;
  }

  async findAllprayer(): Promise<Prayer[]> {
    const findprayers = await this.prayerRepository.find()
    return findprayers
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

  findOneTypeId(id: string){
    const findId = this.typeOfWorshipRepository.findOne({where: {id}})
    if(!findId) { 
    throw new Error('id does not exist')
    }
    return findId
  }
}
