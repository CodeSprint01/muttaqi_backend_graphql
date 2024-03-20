import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GeneralInformation } from 'src/general-information/entities/general-information.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Nominee{

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  relationship: string

  @Field()
  @Column()
  address: string

  @Field()
  @Column()
  phone: string

  @Field()
  @Column()
  cnic: string


  @Field()
  @Column()
  email: string


  @OneToOne(() => User, (user) => user.nominee) 
  @JoinColumn({ name: 'userId' })
  user: User;


}
