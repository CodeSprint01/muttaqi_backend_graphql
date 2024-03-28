import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VualtService } from './vualt.service';
import { Vualt } from './entities/vualt.entity';
import { CreateVualtInput } from './dto/create-vualt.input';
import { UpdateVualtInput } from './dto/update-vualt.input';

@Resolver(() => Vualt)
export class VualtResolver {
  constructor(private readonly vualtService: VualtService) {}

  @Mutation(() => Vualt)
  createVualt(@Args('createVualtInput') createVualtInput: CreateVualtInput) {
    return this.vualtService.create(createVualtInput);
  }

  @Query(() => [Vualt])
  findAllVualt() {
    return this.vualtService.findAll();
  }

  @Query(() => Vualt)
  findOneVualt(@Args('id') id: string) {
    return this.vualtService.findOne(id);
  }

  @Mutation(() => Vualt)
  updateVualt(@Args('updateVualtInput') updateVualtInput: UpdateVualtInput) {
    return this.vualtService.update(updateVualtInput.id, updateVualtInput);
  }

  @Mutation(() => Vualt)
  removeVualt(@Args('id') id: string) {
    return this.vualtService.remove(id);
  }
}
