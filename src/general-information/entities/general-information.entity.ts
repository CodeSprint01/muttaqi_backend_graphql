/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
@Entity()
export class GeneralInformation {

  @Field()
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  @Field()
  address: string;


  @Column()
  @Field()  
  age: string;

  @Column('uuid')
  userId: string; 

  @Field(()=> User)
  @OneToOne(()=> User, user=>user.id)
  user: User;


  constructor() {
  this.id = uuidv4();
 }
  
}
