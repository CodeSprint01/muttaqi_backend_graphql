import { Injectable } from '@nestjs/common';
import { CreateVualtInput } from './dto/create-vualt.input';
import { UpdateVualtInput } from './dto/update-vualt.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Vualt } from './entities/vualt.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class VualtService {
  constructor(
    @InjectRepository(Vualt)
    private readonly vualtRepository: Repository<Vualt>,
    private userService: UserService
  ) {}
  async create(createVualtInput: CreateVualtInput) {
    const{ userId, password } = createVualtInput
    const user = await this.userService.findOne(userId)
    if(!user){
      throw new Error('user does not exist')
    }
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds) 
    const createVualt = this.vualtRepository.create({
    user: user,
    password: hashedPassword
    });
    return this.vualtRepository.save(createVualt)
  }

  findAll() {
    return this.vualtRepository.find()
  }

  findOne(id: string) {
    const vualt = this.vualtRepository.findOne({where: {id}});
    if(!vualt){
      throw new Error('this id doed not exist')
    }
    return vualt
  }

  async update(id: string, updateVualtInput: UpdateVualtInput) {
    const vualt = await this.vualtRepository.findOne({where: {id}})
    if(!vualt){
      throw new Error('this id does not exist')
    }
    Object.assign(vualt, updateVualtInput)
    return this.vualtRepository.save(vualt)
  }

  remove(id: string) {
    return this.vualtRepository.delete(id);
  }
}
