import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class FamilyRelations {

 @Field(()=> Int)
 @Column()
 id: number


 @Field()
 @Column()
 name: string
 
 
}
