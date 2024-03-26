import { UserService } from './../user/user.service';
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
    private readonly TaskCategoryRepository: Repository<TaskCategory>,
    private UserService: UserService
  ) { }
  async create(createTaskInput: CreateTaskInput) {
    const {taskCategoryId,userId,  ...otherInputs} = createTaskInput;
    const taskCategory = await this.findOneCategory(taskCategoryId)
    if(!taskCategory){
      throw new Error("This taskCategoryId does not exist")
    }
    const user = await this.UserService.findOne(userId)
    if(!user){
      throw new Error('this userId does not exist')
    }
    const createTask = this.taskRepository.create({
      ...otherInputs,
      taskCategory: taskCategory,
      user: user,
    })
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
  async update(id: string, updateTaskInput: UpdateTaskInput) {
    const taskId = await this.taskRepository.findOne({where: {id}})
    if(!taskId){
      throw new Error("task id not found")
    }
    Object.assign(taskId, updateTaskInput);
    return await this.taskRepository.save(taskId) ;
  }

  async remove(id: string) {
    return await this.taskRepository.delete(id);
  }
}
