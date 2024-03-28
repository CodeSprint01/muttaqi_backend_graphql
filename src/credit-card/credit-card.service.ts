import { Injectable } from '@nestjs/common';
import { CreateCreditCardInput } from './dto/create-credit-card.input';
import { UpdateCreditCardInput } from './dto/update-credit-card.input';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditCard } from './entities/credit-card.entity';
import { Repository } from 'typeorm';
import { VualtService } from 'src/vualt/vualt.service';

@Injectable()
export class CreditCardService {
  constructor(
    @InjectRepository(CreditCard)
    private readonly creditCardRepository: Repository<CreditCard>,
    private vualtService: VualtService
  ) {
  }
  async create(createCreditCardInput: CreateCreditCardInput) {
    const { vualtId, ...otherinputs } = createCreditCardInput;
    const vualt = await this.vualtService.findOne(vualtId)
    const createCreditCards = this.creditCardRepository.create({
      vualt: vualt,
      ...otherinputs
    })
    return this.creditCardRepository.save(createCreditCards)
    }

  findAll() {
    return this.creditCardRepository.find();
  }

  findOne(id: string) {
    const creditCard = this.creditCardRepository.findOne({where:{id}})
    if(!creditCard) {
      throw new Error('this id does not exist')
    }
    return creditCard;
  }

  update(id: string, updateCreditCardInput: UpdateCreditCardInput) {
    const creditCard = this.findOne(id)
    Object.assign(creditCard, updateCreditCardInput)
    return creditCard
  }

  remove(id: string) {
    return this.creditCardRepository.delete(id);
  }
}
