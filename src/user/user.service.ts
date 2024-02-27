/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserInput): Promise<{user: User, token: string }> {
    const { password, ...rest } = createUserDto;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = this.userRepository.create({
      username: rest.username,
      emailaddress: rest.emailaddress,
      password: hashedPassword,
    });
    console.log("🚀 ~ UserService ~ create ~ createdUser:", createdUser)
    
    const savedUser = await this.userRepository.save(createdUser);

    const payload = { email: savedUser.emailaddress, sub: savedUser.id };
    const token = this.jwtService.sign(payload, { secret: 'secret' });
    console.log("🚀 ~ UserService ~ create ~ payload:", payload)
    
    return { user: savedUser, token };
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async login({ email, password }: { email: string; password: string }): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findOne({ where: { emailaddress: email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.emailaddress, sub: user.id };
    console.log(payload,'payload')
    const token = this.jwtService.sign(payload,{secret:'secret'});
    return { user, token };
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({where:{id: userId}});
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: String(id) } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(user, updateUserInput);
    return this.userRepository.save(user);
}


  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { emailaddress: email } });
  }
  async findById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({where:{id}});
  }


  async remove(userId: string) {
    return await this.userRepository.delete(userId)
  }
}
