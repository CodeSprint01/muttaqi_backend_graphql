/* eslint-disable prettier/prettier */
// auth.service.ts
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  generateToken(user: User): string {
    const payload = { emailaddress: user.emailaddress, password: user.id};
    const options = { expiresIn: '1d' };
    const secretKey = 'majdfiareadblbajhrgpaghavjl';

    return jwt.sign(payload, secretKey, options);
  }
}
