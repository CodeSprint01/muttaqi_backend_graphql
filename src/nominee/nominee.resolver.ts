import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NomineeService } from './nominee.service';
import { Nominee } from './entities/nominee.entity';
import { CreateNomineeInput } from './dto/create-nominee.input';
import { UpdateNomineeInput } from './dto/update-nominee.input';

@Resolver(() => Nominee)
export class NomineeResolver {
  constructor(private readonly nomineeService: NomineeService) {}

  @Mutation(() => Nominee)
  createNominee(@Args('createNomineeInput') createNomineeInput: CreateNomineeInput) {
    return this.nomineeService.create(createNomineeInput);
  }

  @Query(() => [Nominee], { name: 'nominee' })
  findAllNominee() {
    return this.nomineeService.findAll();
  }

  @Query(() => Nominee, { name: 'nominee' })
  findOneNominee(@Args('id', { type: () => String }) id: string) {
    return this.nomineeService.findOne(id);
  }

  @Mutation(() => Nominee)
  updateNominee(@Args('updateNomineeInput') updateNomineeInput: UpdateNomineeInput) {
    return this.nomineeService.update(updateNomineeInput.id, updateNomineeInput);
  }

  @Mutation(() => Nominee)
  removeNominee(@Args('id', { type: () => String }) id: string) {
    return this.nomineeService.remove(id);
  }


  @Mutation(()=> Nominee)
  findNomineeByUserId(@Args('userId',{type: ()=> String})userId: string ){
  return this.nomineeService.findByUserId(userId); 
  }


}
