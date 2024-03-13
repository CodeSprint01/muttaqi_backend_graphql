/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
import { OfferedPrayer } from 'src/prayer/entities/offered-prayer.entity';
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
  email: string;

  @Column()
  @Field(() => String, {})
  password: string;

  @Field()
  @Column({ nullable: true })
  resetPasswordToken: string;

  @Field()
  @Column({ nullable: true })
  resetPasswordExpires: Date;


  @Field()
  @Column()
  fatherName: NamedCurve;

  @Field(() => GeneralInformation)
  @OneToOne(() => GeneralInformation, generalInformation => generalInformation.id)
  generalInfromation: GeneralInformation;


  @Field(() => [OfferedPrayer])
  @OneToMany(() => OfferedPrayer, offeredPrayer => offeredPrayer.user)
  offeredPrayers: OfferedPrayer[];


}
