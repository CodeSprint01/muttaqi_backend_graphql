import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { GeneralInformationService } from 'src/general-information/general-information.service';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>,
  private generalService: GeneralInformationService
  ) { }


  async create(createUserInput: CreateUserInput) {
    console.log(createUserInput);
    this.generalService.create(createUserInput.generalInformation)
    const newUser = this.userRepository.create(createUserInput);
    return await this.userRepository.save(newUser);
  }


  findAll() {
    return `This action returns all user`;
  }


  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  // async craeteGeneralInformation(generalInput: GeneralInput) {
  //   console.log("Gneral infromation ****",generalInput);
    
  //   const general_information = this.generalRepository.create(generalInput);
  //   return await this.generalRepository.save(general_information);
  // }
}

