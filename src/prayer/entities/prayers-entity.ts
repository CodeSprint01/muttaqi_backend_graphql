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
  @Column()
  fajarPrayer: string


  @Field()
  @Column()
  zoharPrayer: string

  @Field()
  @Column()
  asarPrayer: string

  @Field()
  @Column()
  magrabPrayer: string

  @Field()
  @Column()
  ishaPrayer: string

  @Field()
  @Column()
  IshraqPrayer : string

  @Field()
  @Column()
  TahajjudPrayer: string

  @Field()
  @Column()
  ChashtPrayer: string
  
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