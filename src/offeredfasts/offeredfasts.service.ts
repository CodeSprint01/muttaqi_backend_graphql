import { Injectable } from '@nestjs/common';
import { CreateOfferedfastInput } from './dto/create-offeredfast.input';
import { UpdateOfferedfastInput } from './dto/update-offeredfast.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Offeredfast } from './entities/offeredfast.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';

@Injectable()
export class OfferedfastsService {
  constructor(
    @InjectRepository(Offeredfast)
    private readonly offeredFastRepository: Repository<Offeredfast>
  ){}
  create(createOfferedfastInput: CreateOfferedfastInput): Promise<Offeredfast> {
    const createOfferedPrayer = this.offeredFastRepository.create(createOfferedfastInput)
    return this.offeredFastRepository.save(createOfferedPrayer);
  }

  async findAll(): Promise<Offeredfast[]> {
    const findAllOfferedFast = await this.offeredFastRepository.find()
    return findAllOfferedFast;
  }

  async findOne(id: number): Promise<Offeredfast> {
    return this.offeredFastRepository.findOne({where: {id}});
  }

  update(id: string, updateOfferedfastInput: UpdateOfferedfastInput) {
    return `This action updates a #${id} offeredfast`;
  }

  remove(id: number) {
    return `This action removes a #${id} offeredfast`;
  }
}
