import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { Project } from '../projects/projects.entity';
import { Status } from '../status/status.entity';
import { User } from '../users/users.entity';
import { UserTask } from '../user-task/user-task.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  task_id: string;

  @ManyToOne(() => Project, p => p.tasks, { nullable: true })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column()
  title: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true })
  priority: number;

  @ManyToOne(() => Status, { eager: true })
  @JoinColumn({ name: 'status_id' })
  status: Status;

  @Column({ nullable: true, type: 'timestamp' })
  due_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.createdTasks, { nullable: true })
  @JoinColumn({ name: 'creator_id' })
  creator: User;

  // optionally: relations to usertask
}

