import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { FamilyMember } from './family-member.entity';

@ObjectType()
@Entity()
export class FamilyRelation {

    @Field(() => Int)
    @PrimaryColumn()
    id: string


    @Field()
    @Column()
    name: string

    @Field(()=>[FamilyRelation])
    @OneToMany(() => FamilyMember, (familymember) => familymember.familyRelation)
    familymembers: FamilyMember[]
    
}
