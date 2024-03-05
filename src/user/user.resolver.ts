/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { LoginResponse } from './dto/login.input'
import { UpdateUserInput } from './dto/update-user.input';
// import { ForgotPasswordInput } from './dto/forgot-passwoed.Dto';
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  // Create user mutation 
  @Mutation(() => LoginResponse)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    console.log("🚀 ~ UserResolver ~ createUser ~ createUserInput:", createUserInput)
    const { user, token } = await this.userService.create(createUserInput);
    return { user, token };
  }

  // Get all users query 
  @Query(() => [User], { name: 'getAllUsers' })
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }

  // Find user by id  mutation 
  @Mutation(() => User, { name: 'findUserById' })
  async findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  // Update user mutation 
  @Mutation(() => User, { name: "updateUser" })
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  // Remove user Mutation
  @Mutation(() => User, { name: 'deleteUser' })
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }

  // Login user mutation
  @Mutation(() => LoginResponse)
  async loginUser(@Args('email') email: string, @Args('password') password: string) {
    console.log("🚀 ~ UserResolver ~ loginUser ~ email:", email)
    console.log("🚀 ~ UserResolver ~ loginUser ~ password:", password)
    // console.log(email, password, 'user', "token")
    const { user, token } = await this.userService.login({ email, password });
    return { user, token };
  }

  // Forgot password mutation
  @Mutation(() => Boolean)
  async forgotPassword(@Args('email') email: string): Promise<boolean> {
    console.log("🚀 ~ UserResolver ~ forgotPassword ~ email:", email)
    return this.userService.sendPasswordResetEmail(email);
  }

  // Reset password Mutation
  @Mutation(() => Boolean)
  async resetPassword(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<boolean> {
    return this.userService.resetPassword(token, newPassword);
  }
}


