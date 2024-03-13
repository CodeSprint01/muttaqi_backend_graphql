// general-information.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
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
  fullName: string;

  @Column()
  @Field()
  gender: 'male' | 'female';

  @Field()
  @Column()
  age: string

  @Field()
  @Column()
  education: string

  @Field()
  @Column()
  address: string

  @Field()
  @Column()
  country: string

  @Field()
  @Column()
  cnic: string

  @Field()
  @Column()
  sect: string

  @Field()
  @Column()
  firqah: string

  @OneToOne(() => User, (user) => user.generalInformation) // Updated to ManyToOne
  @JoinColumn({ name: 'userId' })
  user: User;



}
