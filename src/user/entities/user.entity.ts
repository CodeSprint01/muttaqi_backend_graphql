/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
@ObjectType()
@Entity()
export class User {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  @Field(()=> String,{})
  username: string;

  @Column()
  @Field(()=> String,{})
  emailaddress: string;
 
  @Column()
  @Field(()=> String,{})
  password: string;


  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Field(()=> GeneralInformation, {nullable: true})
  @OneToOne(()=> GeneralInformation, generalInformation=> generalInformation.user)
  generalInfromation?: GeneralInformation;


//   constructor() {
//     this.id = uuidv4();
//  }

}
