import { Injectable } from '@nestjs/common';
import { CreateVualtInput } from './dto/create-vualt.input';
import { UpdateVualtInput } from './dto/update-vualt.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Vualt } from './entities/vualt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VualtService {
  constructor(
    @InjectRepository(Vualt)
    private readonly vualtRepository: Repository<Vualt>
  ) {}
  create(createVualtInput: CreateVualtInput) {
    const createVualt = this.vualtRepository.create(createVualtInput);
    return this.vualtRepository.save(createVualt)
  }

  findAll() {
    return `This action returns all vualt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vualt`;
  }

  update(id: number, updateVualtInput: UpdateVualtInput) {
    return `This action updates a #${id} vualt`;
  }

  remove(id: number) {
    return `This action removes a #${id} vualt`;
  }
}
