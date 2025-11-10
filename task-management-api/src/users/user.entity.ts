import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from 'src/tasks/tasks.entity';

@Entity() // Déclare que cette classe est une entité (table) dans la base de données
export class User {
  @PrimaryGeneratedColumn() // ID auto-incrémenté de l'utilisateur
  id: number;

  @Column() // Colonne pour le nom de l'utilisateur
  name: string;

  @Column({ unique: true }) // Colonne pour l'email, doit être unique
  email: string;

  // Relation avec les tâches : un utilisateur peut avoir plusieurs tâches
  @OneToMany(() => Task, (task) => task.assignedUser)
  tasks: Task[];
}
