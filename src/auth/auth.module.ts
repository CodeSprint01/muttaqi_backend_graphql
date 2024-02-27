/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './auth.guard';
import { JwtStrategy } from './JwtStrategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret:  'secret',
      signOptions: { expiresIn: '30d' },
    }),
    UserModule,
  ],
  providers: [JwtStrategy, JwtAuthGuard],
  exports: [JwtModule, JwtAuthGuard], 
})  
export class AuthModule {}
