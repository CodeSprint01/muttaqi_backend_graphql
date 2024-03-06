/* eslint-disable prettier/prettier */
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailerModule} from '@nestjs-modules/mailer'
// import { mailerConfig } from './mailer.config';
// import { GeneralInformationModule } from 'src/general-information/general-information.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule,
  MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
  },
  })
],
  providers: [UserResolver, UserService],
  exports: [UserModule, UserService]

})
export class UserModule { }
