import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { GeneralInformation } from '../dto/general_information';

@ObjectType()
@Entity()
export class GeneralInformation {

  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field(()=> String,{})
  address: string;


  @Column()
  @Field(()=> String,{})  
  age: string;



  @Field(()=> User)
  @OneToOne(()=> User, user=>user.id)
  user: User;

  
}
