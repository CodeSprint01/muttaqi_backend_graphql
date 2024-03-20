import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLiabilityInput } from './dto/create-liability.input';
import { UpdateLiabilityInput } from './dto/update-liability.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Liability } from './entities/liability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LiabilityService {
  constructor(
    @InjectRepository(Liability)
    private readonly liabilityRepository: Repository<Liability>
  ){}
  create(createLiabilityInput: CreateLiabilityInput) {
    const createLiability = this.liabilityRepository.create(createLiabilityInput)
    return this.liabilityRepository.save(createLiability);
  }

  findAll():Promise<Liability[]> {
    return this.liabilityRepository.find();
  }

  findOne(id: string) {
    return this.liabilityRepository.findOne({where: {id}}) ;
  }

  // update(id: string, updateLiabilityInput: UpdateLiabilityInput) {
  //   const findId = this.liabilityRepository.findOne({where: {id}})
  // }
  async update(id: string, updateLiabilityInput: UpdateLiabilityInput): Promise<Liability> {
    const liability = await this.liabilityRepository.findOne({where: {id}});
    if (!liability) {
      throw new NotFoundException(`Liability with ID ${id} not found`);
    }
    Object.assign(liability, updateLiabilityInput);
    const updatedLiability = await this.liabilityRepository.save(liability);
    return updatedLiability;
 }

 async remove(id: string) {
  const deletionResult = await this.liabilityRepository.delete(id);
  return  deletionResult ;
}

}
