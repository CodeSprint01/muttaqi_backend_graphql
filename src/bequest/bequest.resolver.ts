import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BequestService } from './bequest.service';
import { Bequest } from './entities/bequest.entity';
import { CreateBequestInput } from './dto/create-bequest.input';
import { UpdateBequestInput } from './dto/update-bequest.input';

@Resolver(() => Bequest)
export class BequestResolver {
  constructor(private readonly bequestService: BequestService) {}

  @Mutation(() => Bequest)
  createBequest(@Args('createBequestInput') createBequestInput: CreateBequestInput) {
    return this.bequestService.create(createBequestInput);
  }

  @Query(() => [Bequest], { name: 'bequest' })
  findAll() {
    return this.bequestService.findAll();
  }

  @Query(() => Bequest, { name: 'bequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bequestService.findOne(id);
  }

  @Mutation(() => Bequest)
  updateBequest(@Args('updateBequestInput') updateBequestInput: UpdateBequestInput) {
    return this.bequestService.update(updateBequestInput.id, updateBequestInput);
  }

  @Mutation(() => Bequest)
  removeBequest(@Args('id', { type: () => Int }) id: number) {
    return this.bequestService.remove(id);
  }
}
