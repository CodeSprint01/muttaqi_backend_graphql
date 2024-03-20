import { Injectable } from '@nestjs/common';
import { CreateBequestInput } from './dto/create-bequest.input';
import { UpdateBequestInput } from './dto/update-bequest.input';

@Injectable()
export class BequestService {
  create(createBequestInput: CreateBequestInput) {
    return 'This action adds a new bequest';
  }

  findAll() {
    return `This action returns all bequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bequest`;
  }

  update(id: number, updateBequestInput: UpdateBequestInput) {
    return `This action updates a #${id} bequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} bequest`;
  }
}
