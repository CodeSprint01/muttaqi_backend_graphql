/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './dto/update-user.input';
import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,

  ) { }

  async create(createUserDto: CreateUserInput): Promise<{ user: User, token: string }> {
    const { password, ...rest } = createUserDto;
    const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!passwordValidationRegex.test(password)) {
      throw new Error('Password must be at least 6 characters long and contain at least one alphabet, one numeric digit, and one special character.');
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const createdUser = this.userRepository.create({
      username: rest.username,
      emailaddress: rest.emailaddress,
      password: hashedPassword,
    });
    console.log("🚀~ UserService ~ create ~ createdUser:", createdUser)

    const savedUser = await this.userRepository.save(createdUser);
    const payload = { email: savedUser.emailaddress, sub: savedUser.id };
    const token = this.jwtService.sign(payload, { secret: 'secret' });
    console.log("🚀~ UserService ~ create ~ payload:", payload)

    return { user: savedUser, token };
  }

  async login({ email, password }: { email: string; password: string }): Promise<{ user: User; token: string }> {
    const user = await this.userRepository.findOne({ where: { emailaddress: email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.emailaddress, sub: user.id };
    console.log(payload, 'payload')
    const token = this.jwtService.sign(payload, { secret: 'secret' });
    return { user, token };
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: String(id) } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(user, updateUserInput);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find(); // TO find all users
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { emailaddress: email } });
  }

  async remove(userId: string) {
    return await this.userRepository.delete(userId)
  }

  async sendPasswordResetEmail(email: string): Promise<boolean> {
    try {
      const user = await this.userRepository.findOne({ where: { emailaddress: email } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const resetToken = uuidv4();
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = new Date(Date.now() + 1800000); // Token valid for 30 min
      await this.userRepository.save(user);
      const name = user.username;
      const resetLink = `http://your-app.com/reset-password?token=${resetToken}`;
      console.log("🚀 ~ UserService ~ sendPasswordResetEmail ~ resetLink:", resetLink);

      await this.mailerService.sendMail({
        to: user.emailaddress,
        from: process.env.GMAIL_EMAIL,
        subject: 'Password Reset',
        template: './password-reset',
        html: `<p> Hi ${name}, please copy the link and <a href="http://localhost:3000/reset?token=${resetLink}">  reset your password</a>`,
      });
      return true;
    } catch (error) {
      console.error("Error sending password reset email:", error);
      return false;
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { resetPasswordToken: token } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.resetPasswordExpires < new Date()) {
      throw new BadRequestException('Reset token expired');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await this.userRepository.save(user);
    return true;
  }

}
