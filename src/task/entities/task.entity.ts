import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskCategory } from './task-category.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Entity()
export class Task {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  nameOfTask: string

  @Field()
  @Column()
  timeOfTask: string

  @Field()
  @Column()
  dateOfTask: string

  @Field()
  @Column()
  isCompleted: string

  @Field()
  @Column()
  descripition: string

  @Column({ type: 'uuid' })
  taskCategoryId: string

  @Column({type: 'uuid'})
  userId: string

  @Field(() => TaskCategory)
  @ManyToOne(() => TaskCategory, taskCategory => taskCategory.tasks)
  @JoinColumn({ name: 'taskCategoryId' })
  taskCategory: TaskCategory;


  @Field(() => User)
  @ManyToOne(() => User, user => user.task)
  @JoinColumn({ name: 'userId' })
  user: User;
}
