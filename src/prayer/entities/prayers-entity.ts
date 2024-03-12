/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
import { offeredPrayer } from './offered-prayer.entity';
import { typeOfWorship } from './typeOfWorship-entity';

@ObjectType()
@Entity("Prayer")
export class Prayer {
  @Field()
  @PrimaryColumn('uuid')
  id: string

  @Field()
  @Column({ default: false })
  fajarPrayer: boolean;


  @Field()
  @Column({ default: false })
  zoharPrayer: boolean

  @Field()
  @Column({ default: false })
  asarPrayer: boolean

  @Field()
  @Column({ default: false })
  magrabPrayer: boolean

  @Field()
  @Column({ default: false })
  ishaPrayer: boolean

  @Field()
  @Column({ default: false })
  IshraqPrayer : boolean

  @Field()
  @Column({ default: false })
  TahajjudPrayer: boolean

  @Field()
  @Column({ default: false })
  ChashtPrayer: boolean
  
  @Column({type: "uuid"})
  typeOfWorshipId: string

  @Field(() => [offeredPrayer])
  @OneToMany(() => offeredPrayer, offeredPrayer => offeredPrayer.prayer)
  offeredPrayers: offeredPrayer[];


  @Field(() => typeOfWorship)
  @ManyToOne(() => typeOfWorship, typeOfWorship => typeOfWorship.prayers)
  @JoinColumn({ name: 'typeOfWorshipId' })
  typeOfWorship: typeOfWorship;
  
  constructor() {
    this.id = uuidv4();
 }

}