/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
import { Prayer } from './prayers-entity';

@ObjectType()
@Entity("typeOfWorship")
export class typeOfWorship {
    @Field()
    @PrimaryColumn('uuid')
    id: string

    @Field()
    @Column()
    type: string


    @Field(() => [Prayer])
    @OneToMany(() => Prayer, prayer => prayer.typeOfWorship)
    prayers: Prayer[]


    constructor() {
        this.id = uuidv4();
    }

}