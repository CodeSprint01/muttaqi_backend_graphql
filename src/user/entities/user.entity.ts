import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { GeneralInformation } from '../dto/general_information';

@ObjectType()
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;


  @Column()
  @Field(()=> String,{})
  name: string;

 
  @Column()
  @Field(()=> String,{})
  password: string;


  @Column()
  @Field(()=> String,{})
  email: string;


  @Column()
  @Field(()=> String,{})
  contact: string;

  

  @Field(type=> GeneralInformation)
  @OneToOne(()=> GeneralInformation, generalInformation=> generalInformation.id)
  generalInfromation: GeneralInformation;

 

}
