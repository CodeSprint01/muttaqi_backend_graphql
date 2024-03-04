/* eslint-disable prettier/prettier */
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';
// import { GeneralInformationModule } from 'src/general-information/general-information.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
          user: 'user@example.com',
          pass: 'password',
        },
      },
      defaults: {
        from: 'maliktayyabbro@gmail.com',
      },
    }),
  ],
  providers: [UserResolver, UserService],
  exports: [UserModule, UserService]

})
export class UserModule { }
