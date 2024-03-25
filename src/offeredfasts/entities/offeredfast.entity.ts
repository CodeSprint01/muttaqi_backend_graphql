import { ObjectType, Field, Int } from '@nestjs/graphql';
import { typeOfWorship } from 'src/prayer/entities/typeOfWorship-entity';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Offeredfast {
@Field()
@PrimaryGeneratedColumn()
id: number

@Field()
@CreateDateColumn()
createdAt: Date

@Field()
@UpdateDateColumn()
updatedAt: Date



// @Field(() => typeOfWorship)
@ManyToOne(() => typeOfWorship, typeOfWorship => typeOfWorship.Offeredfast)
@JoinColumn({name: "typeOfWorshipId"})
typeOfWorship: typeOfWorship


// @Field(() => User)
@ManyToOne(() => User, User => User.Offeredfast)
@JoinColumn({name: "userId"})
User: User
}
