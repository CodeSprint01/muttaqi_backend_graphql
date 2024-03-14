/* eslint-disable prettier/prettier */
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Prayer } from './prayers-entity';
import { Offeredfast } from 'src/offeredfasts/entities/offeredfast.entity';
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

    @Field(() => [Offeredfast])
    @OneToMany(()=> Offeredfast, Offeredfast => Offeredfast.typeOfWorship)
    Offeredfast: Offeredfast[]

}