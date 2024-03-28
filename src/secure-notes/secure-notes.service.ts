import { VualtService } from './../vualt/vualt.service';
import { Vualt } from 'src/vualt/entities/vualt.entity';
import { Injectable } from '@nestjs/common';
import { CreateSecureNoteInput } from './dto/create-secure-note.input';
import { UpdateSecureNoteInput } from './dto/update-secure-note.input';
import { InjectRepository } from '@nestjs/typeorm';
import { SecureNote } from './entities/secure-note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecureNotesService {
  constructor(
    @InjectRepository(SecureNote)
    private secureNoteRepository: Repository<SecureNote>,
    private vualtService: VualtService,

  ){}
  async create(createSecureNoteInput: CreateSecureNoteInput) {
    const { vualtId, ...otherinputs } = createSecureNoteInput;
    const vualt = await this.vualtService.findOne(vualtId)
    const createSecureNote = this.secureNoteRepository.create({
      vualt: vualt,
      ...otherinputs
    })
    return this.secureNoteRepository.save(createSecureNote)
  }

  findAll() {
    return this.secureNoteRepository.find()
  }

  findOne(id: string) {
    const secureNotes =  this.secureNoteRepository.findOne({where: {id}});
    if(!secureNotes) {
      throw new Error('this id does not exist')
    }
    return secureNotes
  }

  async update(id: string, updateSecureNoteInput: UpdateSecureNoteInput) {
    const secureNote = await this.findOne(id)
    Object.assign(secureNote, updateSecureNoteInput)
    return this.secureNoteRepository.save(secureNote)
  }

  remove(id: string) {
    return this.secureNoteRepository.delete(id);
  }
}
