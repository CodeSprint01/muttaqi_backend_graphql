import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';

@ObjectType()
@Entity()
export class TaskCategory {
  @Field()
  @PrimaryGeneratedColumn()
  id : string

  @Field()
  @Column()
  type: string


  @Field(() => [Task])
  @OneToMany(() => Task, task => task.taskCategory)
  tasks: Task[];
}
