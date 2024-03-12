import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class FamilyMembers {
 @PrimaryGeneratedColumn('uuid')
 @Field()
 id: string

 @ManyToOne(()=> User,(user)=> user.familyMembers)
 @JoinColumn({name: 'userId'})
 user: User
}
