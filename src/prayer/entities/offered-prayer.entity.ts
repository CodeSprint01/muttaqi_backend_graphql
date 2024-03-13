/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
import { Prayer } from './prayers-entity';

@ObjectType()
@Entity()
export class OfferedPrayer {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @CreateDateColumn()
  createdAt: Date 

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'uuid' })
  prayerId: string;


  @Field(() => User)
  @ManyToOne(() => User, user => user.offeredPrayers)
  @JoinColumn({ name: 'userId' })
  user: User;


  @Field(() => Prayer)
  @ManyToOne(() => Prayer, prayer => prayer.offeredPrayers)
  @JoinColumn({ name: 'prayerId' })
  prayer: Prayer;

}