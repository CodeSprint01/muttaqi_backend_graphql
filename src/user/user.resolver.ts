/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { LoginResponse } from '../user/dto/loginRes.Dto'
import { UpdateUserInput } from './dto/update-user.input';
// import { ForgotPasswordInput } from './dto/forgot-passwoed.Dto';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => LoginResponse)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    console.log("🚀 ~ UserResolver ~ createUser ~ createUserInput:", createUserInput)
    const { user, token } = await this.userService.create(createUserInput);
  return { user, token };
  }

  @Query(() => [User], { name: 'getAllUsers' })
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }
  

  @Mutation(() => User, { name: 'findUserById' })
  async findOne(@Args('id')  id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, {name: "updateUser"})
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User, {name: 'deleteUser'})
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }
  
  @Mutation(() => LoginResponse)
  async loginUser(@Args('email') email: string, @Args('password') password: string) {
    const { user,token } = await this.userService.login({ email, password });
    console.log(user,token, 'user', "token")
    return { user,token };
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Args('email') email: string): Promise<boolean> {
     return this.userService.sendPasswordResetEmail(email);
  }
 }


