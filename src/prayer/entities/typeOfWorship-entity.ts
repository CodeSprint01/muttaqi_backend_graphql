/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
@Entity("typeOfWorship")
export class typeOfWorship {
    @Field()
    @PrimaryColumn('uuid')
    id: string

    @Field()
    @Column()
    type: string


    constructor() {
        this.id = uuidv4();
    }

}