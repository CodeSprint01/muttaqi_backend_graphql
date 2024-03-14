import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OfferedfastsService } from './offeredfasts.service';
import { Offeredfast } from './entities/offeredfast.entity';
import { CreateOfferedfastInput } from './dto/create-offeredfast.input';
import { UpdateOfferedfastInput } from './dto/update-offeredfast.input';

@Resolver(() => Offeredfast)
export class OfferedfastsResolver {
  constructor(private readonly offeredfastsService: OfferedfastsService) {}

  @Mutation(() => Offeredfast)
  createOfferedfast(@Args('createOfferedfastInput') createOfferedfastInput: CreateOfferedfastInput) {
    return this.offeredfastsService.create(createOfferedfastInput);
  }

  @Query(() => [Offeredfast], { name: 'offeredfasts' })
  findAll() {
    return this.offeredfastsService.findAll();
  }

  @Query(() => Offeredfast, { name: 'offeredfast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.offeredfastsService.findOne(id);
  }

  @Mutation(() => Offeredfast)
  updateOfferedfast(@Args('updateOfferedfastInput') updateOfferedfastInput: UpdateOfferedfastInput) {
    return this.offeredfastsService.update(updateOfferedfastInput.id, updateOfferedfastInput);
  }

  @Mutation(() => Offeredfast)
  removeOfferedfast(@Args('id', { type: () => Int }) id: number) {
    return this.offeredfastsService.remove(id);
  }
}
