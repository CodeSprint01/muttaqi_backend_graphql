import { Injectable } from '@nestjs/common';
import { CreateFamilyInformationInput } from './dto/create-family-information.input';
import { UpdateFamilyInformationInput } from './dto/update-family-information.input';

@Injectable()
export class FamilyInformationService {
  create(createFamilyInformationInput: CreateFamilyInformationInput) {
    return 'This action adds a new familyInformation';
  }

  findAll() {
    return `This action returns all familyInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familyInformation`;
  }

  update(id: number, updateFamilyInformationInput: UpdateFamilyInformationInput) {
    return `This action updates a #${id} familyInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} familyInformation`;
  }
}
