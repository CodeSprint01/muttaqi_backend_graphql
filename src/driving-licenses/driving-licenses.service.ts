import { Injectable } from '@nestjs/common';
import { CreateDrivingLicenseInput } from './dto/create-driving-license.input';
import { UpdateDrivingLicenseInput } from './dto/update-driving-license.input';
import { InjectRepository } from '@nestjs/typeorm';
import { DrivingLicense } from './entities/driving-license.entity';
import { Repository } from 'typeorm';
import { VualtService } from 'src/vualt/vualt.service';

@Injectable()
export class DrivingLicensesService {
  constructor(
    @InjectRepository(DrivingLicense)
    private readonly drivingLicensesServiceRepository: Repository<DrivingLicense>,
    private vualtService: VualtService

  ){}
  async create(createDrivingLicenseInput: CreateDrivingLicenseInput) {
  const { vualtId, ...otherFields } = createDrivingLicenseInput
  const vualt =  await this.vualtService.findOne(vualtId)
  const createDrivingLicense = this.drivingLicensesServiceRepository.create({
    vualt: vualt,
    ...otherFields
  })
    return this.drivingLicensesServiceRepository.save(createDrivingLicense);
  }

  findAll() {
    return this.drivingLicensesServiceRepository.find();
  }

  findOne(id: string) {
    const licensesId = this.drivingLicensesServiceRepository.findOne({where: {id}})
    if(!licensesId) {
      throw new Error('this id does not exist')
    }
    return licensesId;
  }

  async update(id: string, updateDrivingLicenseInput: UpdateDrivingLicenseInput) {
    const licensesId = await this.findOne(id)
    Object.assign(licensesId, updateDrivingLicenseInput)
    return this.drivingLicensesServiceRepository.save(licensesId);
  }

  remove(id: string) {
    return this.drivingLicensesServiceRepository.delete(id);
  }
}
