import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserTask } from '../user-task/user-task.entity';
import { Task } from '../tasks/tasks.entity';

export enum UserRole { USER = 'user', ADMIN = 'admin' }

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => UserTask, ut => ut.user)
  userTasks: UserTask[];

  @OneToMany(() => Task, t => t.creator)
  createdTasks: Task[];
}
