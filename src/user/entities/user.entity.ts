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
import { FamilyMembers } from 'src/family-members/entities/family-member.entity';

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

  @Field(() => GeneralInformation, { nullable: true }) 
  @OneToOne(
    () => GeneralInformation,
    (generalInformation) => generalInformation.user,
  )
  generalInformation?: GeneralInformation; 


  @Field(() => [FamilyMembers], { nullable: true }) 
  @OneToMany(
    () => FamilyMembers,
    (familyMembers) => familyMembers.user,
  )
  familyMembers?: FamilyMembers[]; 

 
}
