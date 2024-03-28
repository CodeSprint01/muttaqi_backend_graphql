import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoginService } from './login.service';
import { Login } from './entities/login.entity';
import { CreateLoginInput } from './dto/create-login.input';
import { UpdateLoginInput } from './dto/update-login.input';

@Resolver(() => Login)
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Mutation(() => Login)
  createLogin(@Args('createLoginInput') createLoginInput: CreateLoginInput) {
    return this.loginService.create(createLoginInput);
  }

  @Query(() => [Login])
  findAll() {
    return this.loginService.findAll();
  }

  @Query(() => Login)
  findOne(@Args('id') id: string) {
    return this.loginService.findOne(id);
  }

  @Mutation(() => Login)
  updateLogin(@Args('updateLoginInput') updateLoginInput: UpdateLoginInput) {
    return this.loginService.update(updateLoginInput.id, updateLoginInput);
  }

  @Mutation(() => Login)
  removeLogin(@Args('id') id: string) {
    return this.loginService.remove(id);
  }
}
