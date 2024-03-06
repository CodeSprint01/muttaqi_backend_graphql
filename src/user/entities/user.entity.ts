// user.entity.ts
import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GeneralInformation } from '../../general-information/entities/general-information.entity';

@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  emailaddress: string;

  @Column()
  @Field()
  password: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Field(() => [GeneralInformation], { nullable: true }) // Updated to array type
  @OneToMany(
    () => GeneralInformation,
    (generalInformation) => generalInformation.user,
  )
  generalInformation?: GeneralInformation[]; // Updated property type to array
}
