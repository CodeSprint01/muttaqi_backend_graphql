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
  constructor(private readonly userService: UserService) { }

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
  async findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, { name: "updateUser" })
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }

  @Mutation(() => LoginResponse)
  async loginUser(@Args('email') email: string, @Args('password') password: string) {
    console.log("🚀 ~ UserResolver ~ loginUser ~ email:", email)
    console.log("🚀 ~ UserResolver ~ loginUser ~ password:", password)
    // console.log(email, password, 'user', "token")
    const { user, token } = await this.userService.login({ email, password });
    return { user, token };
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Args('email') email: string): Promise<boolean> {
    console.log("🚀 ~ UserResolver ~ forgotPassword ~ email:", email)
    return this.userService.sendPasswordResetEmail(email);
  }

  @Mutation(() => Boolean)
  async resetPassword(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<boolean> {
    return this.userService.resetPassword(token, newPassword);
  }
}


