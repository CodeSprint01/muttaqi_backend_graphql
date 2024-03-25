import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskCategory } from './entities/task-category.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskCategory]),
UserModule
],
  providers: [TaskResolver, TaskService],
  exports: [TaskModule]
})
export class TaskModule {}
