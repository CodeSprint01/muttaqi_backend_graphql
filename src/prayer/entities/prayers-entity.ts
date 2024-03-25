/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OfferedPrayer } from './offered-prayer.entity';
import { typeOfWorship } from './typeOfWorship-entity';

@ObjectType()
@Entity()
export class Prayer {
  @Field()
  @PrimaryGeneratedColumn()
  id: string
  
  @Field()
  @Column()
  prayerName: string



  @Field(() => [OfferedPrayer])
  @OneToMany(() => OfferedPrayer, offeredPrayer => offeredPrayer.prayer)
  offeredPrayers: OfferedPrayer[];


  @Field(() => typeOfWorship)
  @ManyToOne(() => typeOfWorship, typeOfWorship => typeOfWorship.prayers)
  @JoinColumn({ name: 'typeOfWorshipId' })
  typeOfWorship: typeOfWorship;

}