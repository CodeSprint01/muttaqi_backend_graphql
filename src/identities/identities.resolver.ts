import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IdentitiesService } from './identities.service';
import { Identity } from './entities/identity.entity';
import { CreateIdentityInput } from './dto/create-identity.input';
import { UpdateIdentityInput } from './dto/update-identity.input';

@Resolver(() => Identity)
export class IdentitiesResolver {
  constructor(private readonly identitiesService: IdentitiesService) {}

  @Mutation(() => Identity)
  createIdentity(@Args('createIdentityInput') createIdentityInput: CreateIdentityInput) {
    console.log("🚀 ~ IdentitiesResolver ~ createIdentity ~ createIdentityInput:", createIdentityInput)
    return this.identitiesService.create(createIdentityInput);
  }

  @Query(() => [Identity])
  findAll() {
    return this.identitiesService.findAll();
  }

  @Query(() => Identity)
  findOne(@Args('id') id: string) {
    return this.identitiesService.findOne(id);
  }

  @Mutation(() => Identity)
  updateIdentity(@Args('updateIdentityInput') updateIdentityInput: UpdateIdentityInput) {
    return this.identitiesService.update(updateIdentityInput.id, updateIdentityInput);
  }

  @Mutation(() => Identity)
  removeIdentity(@Args('id') id: string) {
    return this.identitiesService.remove(id);
  }
}
