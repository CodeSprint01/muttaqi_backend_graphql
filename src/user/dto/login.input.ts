/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field(() => User,{nullable: true})
  user: User;

  @Field({nullable: true})
  token: string;
}
