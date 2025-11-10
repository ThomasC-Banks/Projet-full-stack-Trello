import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.entity';

@Controller('tasks') // Tous les endpoints commenceront par /tasks
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // --------------------------
  // Créer une nouvelle tâche
  // --------------------------
  @Post()
  async create(@Body() body: Partial<Task>): Promise<Task> {
    // body contient les données envoyées depuis le client
    return this.tasksService.createTask(body);
  }

  // --------------------------
  // Récupérer toutes les tâches (optionnellement filtrées)
  // --------------------------
  @Get()
  async findAll(
    @Query('status') status?: string,
    @Query('priority') priority?: string,
    @Query('dueDate') dueDate?: string,
    @Query('assignedUserId') assignedUserId?: number,
  ): Promise<Task[]> {
    // Passe les filtres au service
    return this.tasksService.getTasks({
      status,
      priority,
      dueDate,
      assignedUserId,
    });
  }

  // --------------------------
  // Assigner une tâche à un utilisateur
  // --------------------------
  @Patch(':taskId/assign/:userId')
  async assign(
    @Param('taskId') taskId: number, // ID de la tâche
    @Param('userId') userId: number, // ID de l'utilisateur
  ): Promise<Task> {
    return this.tasksService.assignTask(taskId, userId);
  }
}
