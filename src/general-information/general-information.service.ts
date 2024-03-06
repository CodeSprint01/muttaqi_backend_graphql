import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { GeneralInformation } from './entities/general-information.entity';
import { CreateGeneralInformationInput } from './dto/create-general-information.input';
import { UpdateGeneralInformationInput } from './dto/update-general-information.input';

@Injectable()
export class GeneralInformationService {
  constructor(
    @InjectRepository(GeneralInformation)
    private generalRepository: Repository<GeneralInformation>,
    private userService: UserService
  ) {}
  async create(createGeneralInformationInput: CreateGeneralInformationInput) {
    // console.log("ðŸš€ ~ GeneralInformationService ~ create ~ createGeneralInformationInput:", createGeneralInformationInput)
    // const user = await this.userService.findOne(createGeneralInformationInput.userid);
    // console.log("ðŸš€ ~ GeneralInformationService ~ create ~ user:", user)
    // if (!user) {
    //   throw new Error('User not found');
    // }
  
    // const general = this.generalRepository.create({
    //   address: createGeneralInformationInput.address,
    //   age: createGeneralInformationInput.age,
    //   user: user,
    //   userId: user.id,
    // });
    const general = this.generalRepository.create(createGeneralInformationInput)
    console.log("ðŸš€ ~ GeneralInformationService ~ create ~ general:", general)
    return await this.generalRepository.save(general);
  }
  
  // async create(createGeneralInformationInput: CreateGeneralInformationInput) {
  //   const general = this.generalRepository.create(createGeneralInformationInput);
  //   return await this.generalRepository.save(general);
  // }

  async update(id: string, updateGeneralInformationInput: UpdateGeneralInformationInput) {
    const general = await this.generalRepository.findOne({where: {id: id}});
    if (!general) {
      throw new NotFoundException(`GeneralInformation with ID ${id} not found`);
    }

    // Update properties if provided in updateGeneralInformationInput
    if (updateGeneralInformationInput.address !== undefined) {
      general.address = updateGeneralInformationInput.address;
    }
    if (updateGeneralInformationInput.age !== undefined) {
      general.age = updateGeneralInformationInput.age;
    }
    return await this.generalRepository.save(general);
  }


  findAll() {
    return this.generalRepository.find();
  }

  
  findOne(id: string) {
    const user =  this.generalRepository.findOne({where:{ id : id}});
    if(!user){
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user
  }

  // async update(id: string, updateGeneralInformationInput: UpdateGeneralInformationInput) {
  //   const general = await this.generalRepository.findOne({ where: { id: id } });
  //   if (!general) {
  //     throw new NotFoundException(`GeneralInformation with ID ${id} not found`);
  //   }
  //   Object.assign(general, updateGeneralInformationInput);
  //   return await this.generalRepository.save(general);
  // }
  

  remove(id: string) {
    return this.generalRepository.delete(id) ;
  }
}