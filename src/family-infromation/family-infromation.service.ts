import { Injectable } from '@nestjs/common';
import { CreateFamilyInfromationInput } from './dto/create-family-infromation.input';
import { UpdateFamilyInfromationInput } from './dto/update-family-infromation.input';

@Injectable()
export class FamilyInfromationService {
  create(createFamilyInfromationInput: CreateFamilyInfromationInput) {
    return 'This action adds a new familyInfromation';
  }

  findAll() {
    return `This action returns all familyInfromation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familyInfromation`;
  }

  update(id: number, updateFamilyInfromationInput: UpdateFamilyInfromationInput) {
    return `This action updates a #${id} familyInfromation`;
  }

  remove(id: number) {
    return `This action removes a #${id} familyInfromation`;
  }
}
