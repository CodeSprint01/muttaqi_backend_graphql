// general-information.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
@ObjectType()
export class GeneralInformation {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  age: string;

  @ManyToOne(() => User, (user) => user.generalInformation) // Updated to ManyToOne
  user: User;
}
