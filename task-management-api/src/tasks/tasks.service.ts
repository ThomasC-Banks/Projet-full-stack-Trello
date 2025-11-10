import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>, // Repo pour gérer les tâches

    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Repo pour gérer les utilisateurs
  ) {}

  // --------------------------
  // Créer une nouvelle tâche
  // --------------------------
  async createTask(data: Partial<Task>): Promise<Task> {
    const task = this.taskRepository.create(data); // Création d'une instance Task

    // Si un utilisateur est assigné
    if (data.assignedUser && data.assignedUser.id) {
      const user = await this.userRepository.findOneBy({
        id: data.assignedUser.id,
      });
      if (user) {
        task.assignedUser = user; // Assigne l'utilisateur si trouvé
      }
    }

    return this.taskRepository.save(task); // Sauvegarde dans la BDD
  }

  // --------------------------
  // Récupérer les tâches avec filtres optionnels
  // --------------------------
  async getTasks(filters: {
    status?: string;
    priority?: string;
    dueDate?: string;
    assignedUserId?: number;
  }): Promise<Task[]> {
    const query = this.taskRepository.createQueryBuilder('task'); // Crée la requête

    if (filters.status)
      query.andWhere('task.status = :status', { status: filters.status });
    if (filters.priority)
      query.andWhere('task.priority = :priority', {
        priority: filters.priority,
      });
    if (filters.dueDate)
      query.andWhere('task.dueDate <= :dueDate', { dueDate: filters.dueDate });
    if (filters.assignedUserId)
      query.andWhere('task.assignedUserId = :assignedUserId', {
        assignedUserId: filters.assignedUserId,
      });

    return query.getMany(); // Retourne toutes les tâches filtrées
  }

  // --------------------------
  // Assigner une tâche à un utilisateur
  // --------------------------
  async assignTask(taskId: number, userId: number): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id: taskId });
    if (!task) throw new NotFoundException('Tâche non trouvée');

    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) throw new NotFoundException('Utilisateur non trouvé');

    task.assignedUser = user; // Assigne l'utilisateur
    return this.taskRepository.save(task); // Sauvegarde la tâche mise à jour
  }
}
