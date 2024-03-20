import { Injectable } from '@nestjs/common';
import { CreateNomineeInput } from './dto/create-nominee.input';
import { UpdateNomineeInput } from './dto/update-nominee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Nominee } from './entities/nominee.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class NomineeService {

  constructor(
    @InjectRepository(Nominee) private nomineeRepository: Repository<Nominee>,
    private userService: UserService
  ) { }
  async create(createNomineeInput: CreateNomineeInput) {
    const user = await this.userService.findOne(createNomineeInput.userId)
    if (!user) {
      throw new Error(`User with #${createNomineeInput.userId} not found`)
    }
    const nominee = this.nomineeRepository.create(
      {
        name: createNomineeInput.name,
        cnic: createNomineeInput.cnic,
        address: createNomineeInput.address,
        email: createNomineeInput.email,
        phone: createNomineeInput.email,
        relationship: createNomineeInput.relationship,
        user: user
      }
    )

    return this.nomineeRepository.save(nominee);
  }

  async findAll() {
    return await this.nomineeRepository.find();
  }

  async findOne(id: string) {
    const nominee = await this.nomineeRepository.findOne({
      where: {
        id
      }
    })
    if (!nominee)
      throw new Error(`Nominee not found with #${id}`)
    return nominee;
  }

  async update(id: string, updateNomineeInput: UpdateNomineeInput) {
    const nominee = await this.nomineeRepository.findOne({ where: { id } });
    if (!nominee)
      throw new Error(`Nominee not found with #${id}`)
    return await this.nomineeRepository.update({ id }, { ...updateNomineeInput })
  }

  async remove(id: string) {
    const nominee = await this.nomineeRepository.findOne({ where: { id } });
    if (!nominee)
      throw new Error(`Nominee not found with #${id}`)
    return await this.nomineeRepository.delete(id)
  }

  async findByUserId(id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new Error(`user with this #${id} not find`)
    }
    const nominee = user.nominee;
    if (!nominee) {
      throw new Error(`Nominee not found for the ${user.username} with id= #${id}`)
    }
    return nominee;
  }
}
