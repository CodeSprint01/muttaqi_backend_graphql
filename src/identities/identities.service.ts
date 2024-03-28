import { VualtService } from './../vualt/vualt.service';
import { Injectable } from '@nestjs/common';
import { CreateIdentityInput } from './dto/create-identity.input';
import { UpdateIdentityInput } from './dto/update-identity.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Identity } from './entities/identity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IdentitiesService {
  constructor(
    @InjectRepository(Identity)
    private IdentityRepository: Repository<Identity>,
    private vualtService: VualtService
  ){}
  async create(createIdentityInput: CreateIdentityInput) {
    const { vualtId, ...otherinputs } = createIdentityInput;
    const vualt = await this.vualtService.findOne(vualtId)
    const createIdentity = this.IdentityRepository.create({
      vualt: vualt,
      ...otherinputs
    })
    return this.IdentityRepository.save(createIdentity)
  }

  findAll() {
    return this.IdentityRepository.find();
  }

  findOne(id: string) { 
    const identity = this.IdentityRepository.findOne({where: {id}})
    if(!identity) {
      throw new Error("this id does not exist")
    }
    return identity
   }

  async update(id: string, updateIdentityInput: UpdateIdentityInput) {
    const identity = await this.findOne(id);
    Object.assign(identity, updateIdentityInput)
    return  this.IdentityRepository.save(identity)
  }

  remove(id: string) {
    return this.IdentityRepository.delete(id);
  }
}
