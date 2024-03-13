import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FamilyRelation } from './family-relations.entity';

@ObjectType()
@Entity()
export class FamilyMember {
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string

    @Field()
    @Column()
    name: string

    @Field()
    @Column()
    cinic: string


    @Field()
    @Column()
    isAlive: boolean

    
    @OneToOne(()=> FamilyRelation, (familyRelation)=> familyRelation.familymember)
    @JoinColumn({name: 'relationId'})
    familyRelation: FamilyRelation
    

    @ManyToOne(() => User, (user) => user.familyMembers)
    @JoinColumn({ name: 'userId' })
    user: User
}
