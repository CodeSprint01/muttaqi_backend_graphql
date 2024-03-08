/* eslint-disable prettier/prettier */
import { offeredPrayer } from './entities/offered-prayer.entity';
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
    @InjectRepository(offeredPrayer)
    private readonly offeredPrayerRepository: Repository<offeredPrayer>,
    @InjectRepository(Prayer)
    private readonly prayerRepository: Repository<Prayer>,
    @InjectRepository(typeOfWorship)
    private readonly typeOfWorshipRepository: Repository<typeOfWorship>
  ) { }
  create(CreateOfferedPrayerInput: CreateOfferedPrayerInput): Promise<offeredPrayer> {

    const {userId, ...otherInputs} = CreateOfferedPrayerInput;
    if(!userId) {
      throw new Error("userId is required")
    }
    const createOfferedPrayer = this.offeredPrayerRepository.create({
      ...otherInputs,
      userId
    });
    const saveOfferedPreayer = this.offeredPrayerRepository.save(createOfferedPrayer)
    return saveOfferedPreayer;
  }

  createPrayer(CreatePrayerInput: CreatePrayerInput): Promise<Prayer> {
    const createPrayer = this.prayerRepository.create(CreatePrayerInput)
    const savePreayer = this.prayerRepository.save(createPrayer)
    return savePreayer;
  }

  typeOfWorship(CreateTypeOfWorshipInput: CreateTypeOfWorshipInput): Promise<typeOfWorship> {
    const createTypeOfWorship = this.typeOfWorshipRepository.create(CreateTypeOfWorshipInput)
    const saveTypeOfWorship = this.typeOfWorshipRepository.save(createTypeOfWorship)
    return saveTypeOfWorship;
  }

  async findAllprayer(): Promise<Prayer[]> {
    const findprayers = await this.prayerRepository.find()
    return findprayers
  }

  async findAllOfferedPrayer(): Promise<offeredPrayer[]> {
    const findOfferedPrayers = await this.offeredPrayerRepository.find()
    return findOfferedPrayers
  }

  async findOfferedPrayerById(id: string): Promise<offeredPrayer> {
    const findOfferedPrayerById = this.offeredPrayerRepository.findOne({where:{ id }});
    if (!findOfferedPrayerById) {
      throw new NotFoundException(`offered prayer with Id ${id} not found`);
    }
    return findOfferedPrayerById
  }

  findOneprayer(id: string ) {
    const findPrayerById =  this.prayerRepository.findOne({where: {id}});
    if(!findPrayerById){
      throw new NotFoundException(`Prayer with ID ${id} not found`);
    }
    return findPrayerById
  }
}
