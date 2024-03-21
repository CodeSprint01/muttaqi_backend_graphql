import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Asset {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  type: string


  @Field()
  @Column()
  value: string
  
}
