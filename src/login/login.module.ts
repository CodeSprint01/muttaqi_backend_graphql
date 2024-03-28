import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { VualtModule } from 'src/vualt/vualt.module';

@Module({
  imports: [TypeOrmModule.forFeature([Login]),
  VualtModule
  ],
  providers: [LoginResolver, LoginService],
})
export class LoginModule {}
