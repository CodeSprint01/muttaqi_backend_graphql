import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Offeredfast {
@Field()
@PrimaryGeneratedColumn()
id: string

@Field()
@CreateDateColumn()
createdAt: Date

@Field()
@UpdateDateColumn()
updateAt: Date


}
