import { Module } from '@nestjs/common';
import { LiabilityService } from './liability.service';
import { LiabilityResolver } from './liability.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Liability } from './entities/liability.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Liability]),
UserModule
],
  providers: [
    LiabilityResolver,
    LiabilityService,
  ],
  exports: [LiabilityModule]
})
export class LiabilityModule {}
