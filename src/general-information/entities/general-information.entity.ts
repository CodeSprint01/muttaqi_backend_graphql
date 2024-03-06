import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
@Entity()
export class GeneralInformation {

  @Field()
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()  
  age: string;

  @Field()
  @Column('uuid')
  userId: string; 

  @Field(()=> User)
  @OneToOne(()=> User, user=>user.generalInfromation)
  user: User;


   
}