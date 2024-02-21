import { Injectable } from '@nestjs/common';
import { CreateGeneralInformationInput } from './dto/create-general-information.input';
import { UpdateGeneralInformationInput } from './dto/update-general-information.input';
import { Repository } from 'typeorm/repository/Repository';
import { GeneralInformation } from './entities/general-information.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GeneralInformationService {
  constructor(@InjectRepository(GeneralInformation) private generalRepository: Repository<GeneralInformation>) { }




  async create(createGeneralInformationInput: CreateGeneralInformationInput) {
    const general = this.generalRepository.create(createGeneralInformationInput);
    return await this.generalRepository.save(general);
  }

  findAll() {
    return `This action returns all generalInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalInformation`;
  }

  update(id: number, updateGeneralInformationInput: UpdateGeneralInformationInput) {
    return `This action updates a #${id} generalInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalInformation`;
  }
}
