import { Injectable } from '@nestjs/common';
import { CreateOfferedfastInput } from './dto/create-offeredfast.input';
import { UpdateOfferedfastInput } from './dto/update-offeredfast.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Offeredfast } from './entities/offeredfast.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfferedfastsService {
  constructor(
    @InjectRepository(Offeredfast)
    private readonly offeredFastRepository: Repository<Offeredfast>
  ){}
  create(createOfferedfastInput: CreateOfferedfastInput) {
    const createOfferedPrayer = this.offeredFastRepository.create(createOfferedfastInput)
    return this.offeredFastRepository.save(createOfferedPrayer);
  }

  findAll() {
    return `This action returns all offeredfasts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offeredfast`;
  }

  update(id: number, updateOfferedfastInput: UpdateOfferedfastInput) {
    return `This action updates a #${id} offeredfast`;
  }

  remove(id: number) {
    return `This action removes a #${id} offeredfast`;
  }
}
