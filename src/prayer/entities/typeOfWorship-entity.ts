/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Prayer } from './prayers-entity';
@ObjectType()
@Entity()
export class typeOfWorship {
    @Field()
    @PrimaryGeneratedColumn()
    id: string

    @Field()
    @Column()
    type: string


    @Field(() => [Prayer])
    @OneToMany(() => Prayer, prayer => prayer.typeOfWorship)
    prayers: Prayer[]

}