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
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { OfferedPrayer } from 'src/prayer/entities/offered-prayer.entity';
import { Nominee } from 'src/nominee/entities/nominee.entity';
import { Bequest } from 'src/bequest/entities/bequest.entity';

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
  password: string;

  @Column()
  @Field(() => String, {})
  email: string;


  @Field()
  @Column({ nullable: true })
  resetPasswordToken: string;

  @Field()
  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Field(() => GeneralInformation, { nullable: true })
  @OneToOne(
    () => GeneralInformation,
    (generalInformation) => generalInformation.user,
  )
  generalInformation?: GeneralInformation;


  @Field(() => [FamilyMember], { nullable: true })
  @OneToMany(
    () => FamilyMember,
    (familyMember) => familyMember.user,
  )
  familyMembers?: FamilyMember[];
  @Field()
  @Column()
  fatherName: NamedCurve;

  @Field(() => GeneralInformation)
  @OneToOne(() => GeneralInformation, generalInformation => generalInformation.user)
  generalInfromation: GeneralInformation;


  @Field(() => [OfferedPrayer])
  @OneToMany(() => OfferedPrayer, offeredPrayer => offeredPrayer.user)
  offeredPrayers: OfferedPrayer[];

  @Field(()=> Nominee)
  @OneToOne(() => Nominee, nominee => nominee.user)
  nominee: Nominee;

  @Field(()=>[])
  @OneToMany(()=> Bequest, bequest=>bequest.user)
  bequests: Bequest[]


}
