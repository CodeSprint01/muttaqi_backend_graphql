import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskCategory } from './entities/task-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskCategory])],
  providers: [TaskResolver, TaskService],
  exports: [TaskService]
})
export class TaskModule {}
