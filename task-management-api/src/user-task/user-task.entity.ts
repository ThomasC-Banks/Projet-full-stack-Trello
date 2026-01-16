import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from './user.entity';
import { Task } from './task.entity';

@Entity('user_tasks')
export class UserTasks {
  @PrimaryGeneratedColumn()
  user_task_id: number;

  @ManyToOne(() => User, user => user.userTasks)
  user: User;

  @ManyToOne(() => Task, task => task.userTasks)
  task: Task;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  assigned_at: Date;
}
