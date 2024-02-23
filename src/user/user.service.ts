/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { GeneralInformationService } from 'src/general-information/general-information.service';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>,
  private generalService: GeneralInformationService,
  private readonly authService: AuthService,

  ) { }


  // async create(createUserInput: CreateUserInput) {
  //   console.log(createUserInput);
  //   this.generalService.create(createUserInput.generalInformation)
  //   const newUser = this.userRepository.create(createUserInput);
  //   return await this.userRepository.save(newUser);
  // }

  async create(createUserDto: CreateUserInput): Promise<User> {
    const { password, ...rest } = createUserDto;
    const salt = 10
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = this.userRepository.create({
      username: rest.username,
      emailaddress: rest.emailaddress,
      password: hashedPassword,
    });
    console.log("🚀 ~ UsersService ~ create ~ createdUser:", createdUser);
    return await this.userRepository.save(createdUser);
  }


  findAll() {
    return this.userRepository.find();
  }

  async login(loginUserInput: CreateUserInput): Promise<User> {
    const user = await this.userRepository.findOne({ where: { emailaddress: loginUserInput.emailaddress } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  // async login(loginUserInput: CreateUserInput): Promise<{ access_token: string }> {
  //   console.log("🚀 ~ UserService ~ login ~ loginUserInput:", loginUserInput)
  //   const user = await this.userRepository.findOne({ where: { emailaddress: loginUserInput.emailaddress } });
  //   console.log("🚀 ~ UserService ~ login ~ user:", user)
  //   if (user && user.password === loginUserInput.password) {
  //     const accessToken = this.authService.generateToken(user);
  //     return { access_token: accessToken };
  //   }
  //   throw new Error('Invalid username or password');
  // }


  async findOne(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId.toString() } } );
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
}


  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.findOne(id);
    if (updateUserInput.password) {
      const salt = 10;
      const hashedPassword = await bcrypt.hash(updateUserInput.password, salt);
      user.password = hashedPassword;
    }
    Object.assign(user, updateUserInput);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }


}

