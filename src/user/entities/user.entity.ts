import { Bookmark } from './../../bookmark/entities/bookmark.entity';
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

  @Field(() => GeneralInformation)
  @OneToOne(() => GeneralInformation, generalInformation => generalInformation.id)
  generalInfromation: GeneralInformation;


  @Field(() => [OfferedPrayer])
  @OneToMany(() => OfferedPrayer, offeredPrayer => offeredPrayer.user)
  offeredPrayers: OfferedPrayer[];


  @Field(() => [Bookmark])
 @OneToMany(() => Bookmark, bookmark => bookmark.user)
 bookmarks: Bookmark[];
 
} 
