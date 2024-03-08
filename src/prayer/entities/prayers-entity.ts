/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
@Entity("Prayer")
export class Prayer {
  @Field()
  @PrimaryColumn('uuid')
  id: string

  @Field()
  @Column()
  prayerName: string

  @Field()
  @Column()
  typeOfPrayer: string

  @Field()
  @Column()
  startingTime: string

  @Field()
  @Column()
  endingTime: string

  
  constructor() {
    this.id = uuidv4();
 }

}