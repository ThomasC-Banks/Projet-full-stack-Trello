import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Repository pour gérer les utilisateurs dans la BDD
  ) {}

  // --------------------------
  // Récupérer tous les utilisateurs avec leurs tâches
  // --------------------------
  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['tasks'] });
    // 'relations' permet de récupérer automatiquement les tâches liées à chaque utilisateur
  }

  // --------------------------
  // Récupérer un utilisateur par son ID
  // --------------------------
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['tasks'], // Inclut les tâches assignées à l'utilisateur
    });

    if (!user) throw new NotFoundException('Utilisateur introuvable'); // Erreur si l'utilisateur n'existe pas
    return user;
  }

  // --------------------------
  // Créer un nouvel utilisateur
  // --------------------------
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto); // Crée une instance User
    return this.userRepository.save(user); // Sauvegarde dans la BDD
  }

  // --------------------------
  // Mettre à jour un utilisateur existant
  // --------------------------
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto); // Met à jour les champs fournis
    return this.findOne(id); // Retourne l'utilisateur mis à jour
  }

  // --------------------------
  // Supprimer un utilisateur
  // --------------------------
  async remove(id: number): Promise<void> {
    const result = await this.userRepository.delete(id); // Supprime l'utilisateur par ID
    if (result.affected === 0)
      throw new NotFoundException('Utilisateur introuvable'); // Erreur si aucun utilisateur supprimé
  }
}
