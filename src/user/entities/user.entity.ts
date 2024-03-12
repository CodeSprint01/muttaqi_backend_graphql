/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
import { offeredPrayer } from 'src/prayer/entities/offered-prayer.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
@ObjectType()
@Entity()
export class User {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  @Field(() => String, {})
  username: string;

  @Column()
  @Field(() => String, {})
  emailaddress: string;

  @Column()
  @Field(() => String, {})
  password: string;


  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;


  @Field(() => GeneralInformation)
  @OneToOne(() => GeneralInformation, generalInformation => generalInformation.id)
  generalInfromation: GeneralInformation;


  @Field(() => [offeredPrayer])
  @OneToMany(() => offeredPrayer, offeredPrayer => offeredPrayer.user)
  offeredPrayers: offeredPrayer[];

  constructor() {
    this.id = uuidv4();
  }

}
