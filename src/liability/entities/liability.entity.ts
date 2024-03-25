import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Liability {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  type: string

  @Field()
  @Column()
  value: string
 
  @Field(() => User)
  @ManyToOne(() => User, user => user.liabilities)
  @JoinColumn({name: 'userId'})
  user: User;

}
