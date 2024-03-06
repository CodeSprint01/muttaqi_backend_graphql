/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity,  PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
@ObjectType()
@Entity()
export class User {

  @Field()
  @PrimaryColumn('uuid')
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


  // @Field(()=> GeneralInformation)
  // @OneToOne(()=> GeneralInformation, generalInformation=> generalInformation.id)
  // generalInfromation: GeneralInformation;
 
  // @OneToMany(() => OfferedPrayer, OfferedPrayer => OfferedPrayer.user)
  // OfferedPrayer: OfferedPrayer[];

  constructor() {
    this.id = uuidv4();
 }

}
