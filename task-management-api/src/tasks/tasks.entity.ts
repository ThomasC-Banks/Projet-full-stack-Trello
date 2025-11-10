import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'en_attente' })
  status: string; // ex: 'en_attente', 'en_cours', 'terminée'

  @Column({ default: 'moyenne' })
  priority: string; // ex: 'basse', 'moyenne', 'haute'

  @Column({ type: 'date', nullable: true })
  dueDate: string;

  // Relation avec User
  @ManyToOne(() => User, (user) => user.tasks, {
    eager: true,
    onDelete: 'SET NULL',
  })
  assignedUser: User;
}
