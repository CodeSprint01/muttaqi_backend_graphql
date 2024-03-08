/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
@Entity("offeredPrayer")
export class offeredPrayer {
  @Field()
  @PrimaryColumn('uuid')
  id: string

  @Field()
  @Column()
  offeredTime: string

  @Field()
  @Column()
  offeredDate: string

 @Column({ type: 'uuid' })
 userId: string;


 @ManyToOne(() => User, user => user.offeredPrayers)
 @JoinColumn({ name: 'userId' })
 user: User;

  constructor() {
    this.id = uuidv4();
 }

}