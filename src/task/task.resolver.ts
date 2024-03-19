import { CreateTaskCategoryInput } from './dto/create-task-category.input';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { TaskCategory } from './entities/task-category.entity';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) { }


  // create task mutation
  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.taskService.create(createTaskInput);
  }

  // find all task query
  @Query(() => [Task])
  findAlltask() {
    return this.taskService.findAll();
  }

  // find one task query
  @Query(() => Task)
  findOneTask(@Args('id') id: string) {
    return this.taskService.findOne(id);
  }

  // create task category mutation
  @Mutation(() => TaskCategory)
  CreateTaskCategory(@Args('CreateTaskCategoryInput') CreateTaskCategoryInput: CreateTaskCategoryInput){
    return this.taskService.createCategory(CreateTaskCategoryInput)
  }

  // find all category mutation 
@Query(() => TaskCategory)
findAllCategory(){
  this.taskService.findAllCategory()
}

@Query(() => TaskCategory)
findOneCategry(@Args('id') id: string){
  return this.taskService.findOneCategory(id)
}


  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.taskService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => Task)
  removeTask(@Args('id', { type: () => Int }) id: number) {
    return this.taskService.remove(id);
  }
}
