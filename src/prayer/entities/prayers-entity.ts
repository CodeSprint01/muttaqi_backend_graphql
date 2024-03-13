/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { offeredPrayer } from './offered-prayer.entity';
import { typeOfWorship } from './typeOfWorship-entity';

@ObjectType()
@Entity("Prayer")
export class Prayer {
  @Field()
  @PrimaryGeneratedColumn()
  id: string
  
  @Field()
  @Column()
  prayerName: string


  @Column({type: "uuid"})
  typeOfWorshipId: string

  @Field(() => [offeredPrayer])
  @OneToMany(() => offeredPrayer, offeredPrayer => offeredPrayer.prayer)
  offeredPrayers: offeredPrayer[];


  @Field(() => typeOfWorship)
  @ManyToOne(() => typeOfWorship, typeOfWorship => typeOfWorship.prayers)
  @JoinColumn({ name: 'typeOfWorshipId' })
  typeOfWorship: typeOfWorship;

}