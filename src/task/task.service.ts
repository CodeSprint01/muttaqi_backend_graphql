import { CreateTaskCategoryInput } from './dto/create-task-category.input';
import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { TaskCategory } from './entities/task-category.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(TaskCategory)
    private readonly TaskCategoryRepository: Repository<TaskCategory>
  ) { }
  create(createTaskInput: CreateTaskInput) {
    const createTask = this.taskRepository.create(createTaskInput)
    return this.taskRepository.save(createTask);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string) {
    return this.taskRepository.findOne({
      where: { id },
      relations: ["taskCategory"]
    });
  }

  createCategory(CreateTaskCategoryInput: CreateTaskCategoryInput) {
    const createCategory = this.TaskCategoryRepository.create(CreateTaskCategoryInput)
    return this.TaskCategoryRepository.save(createCategory)
  }

  findAllCategory(): Promise<TaskCategory[]> {
    return this.TaskCategoryRepository.find()
  }

  findOneCategory(id: string) {
    return this.TaskCategoryRepository.findOne({ where: { id } })
  }
  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
