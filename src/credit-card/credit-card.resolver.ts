import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreditCardService } from './credit-card.service';
import { CreditCard } from './entities/credit-card.entity';
import { CreateCreditCardInput } from './dto/create-credit-card.input';
import { UpdateCreditCardInput } from './dto/update-credit-card.input';

@Resolver(() => CreditCard)
export class CreditCardResolver {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Mutation(() => CreditCard)
  createCreditCard(@Args('createCreditCardInput') createCreditCardInput: CreateCreditCardInput) {
    return this.creditCardService.create(createCreditCardInput);
  }

  @Query(() => [CreditCard])
  findAll() {
    return this.creditCardService.findAll();
  }

  @Query(() => CreditCard)
  findOne(@Args('id') id: string) {
    return this.creditCardService.findOne(id);
  }

  @Mutation(() => CreditCard)
  updateCreditCard(@Args('updateCreditCardInput') updateCreditCardInput: UpdateCreditCardInput) {
    return this.creditCardService.update(updateCreditCardInput.id, updateCreditCardInput);
  }

  @Mutation(() => CreditCard)
  removeCreditCard(@Args('id') id: string) {
    return this.creditCardService.remove(id);
  }
}
