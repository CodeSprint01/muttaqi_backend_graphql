/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async loginUser(@Args('loginUserInput') loginUserInput: CreateUserInput) {
    console.log("🚀 ~ UserResolver ~ loginUser ~ loginUserInput:", loginUserInput)
    const result = await this.userService.login(loginUserInput);
    return result;
  }
  // @Mutation(() => String)
  // async loginUser(@Args('loginUserInput') loginUserInput: CreateUserInput): Promise<string> {
  //   console.log("🚀 ~ UserResolver ~ loginUser ~ loginUserInput:", loginUserInput)
  //   const result = await this.userService.login(loginUserInput);
  //   return result.access_token;
  // }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
