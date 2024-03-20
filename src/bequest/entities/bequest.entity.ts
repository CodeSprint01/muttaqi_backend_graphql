import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Bequest {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  gender: string

  @Field()
  @Column()
  age: string

  @Field()
  @Column()
  relation: string

  @Field()
  @Column()
  address: string


  @Field()
  @Column()
  cnic: string


  @Field()
  @Column()
  country: string


  @Field()
  @Column()
  number: string


  @ManyToOne(() => User, (user) => user.bequests)
  @JoinColumn({ name: 'userId' })
  user: User





}
