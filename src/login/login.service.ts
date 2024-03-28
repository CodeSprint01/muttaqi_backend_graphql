import { Injectable } from '@nestjs/common';
import { CreateLoginInput } from './dto/create-login.input';
import { UpdateLoginInput } from './dto/update-login.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';
import { VualtService } from 'src/vualt/vualt.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
    private vualtService: VualtService
  ){}
  async create(createLoginInput: CreateLoginInput) {
    const {vualtId, Password, ...otherinputs} = createLoginInput
    const vualt =await this.vualtService.findOne(vualtId)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);
    const login = this.loginRepository.create({
      vualt:  vualt,
      Password: hashedPassword,
      ...otherinputs
    })
    return this.loginRepository.save(login)
  }

  findAll() {
    return this.loginRepository.find();
  }

  findOne(id: string) {
    const login = this.loginRepository.findOne({where: {id}})
    if(!login) {
      throw new Error('this is does not exist')
    }
    return login;
  }

  async update(id: string, updateLoginInput: UpdateLoginInput) {
    const login =await  this.findOne(id)
    Object.assign(login, updateLoginInput)
    return this.loginRepository.save(login);
  }

  remove(id: string) {
    return this.loginRepository.delete(id);
  }
}
