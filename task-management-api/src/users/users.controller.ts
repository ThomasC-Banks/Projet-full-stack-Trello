import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') // Tous les endpoints commencent par /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // Injection du service Users

  // --------------------------
  // Récupérer tous les utilisateurs
  // --------------------------
  @Get()
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.usersService.findAll(); // Appelle le service pour récupérer tous les utilisateurs
    } catch (err) {
      // Si erreur, renvoie une exception HTTP 400
      throw new BadRequestException((err as Error).message);
    }
  }

  // --------------------------
  // Récupérer un utilisateur par son ID
  // --------------------------
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    try {
      return await this.usersService.findOne(id); // Appelle le service pour récupérer un utilisateur spécifique
    } catch (err) {
      throw new BadRequestException((err as Error).message);
    }
  }

  // --------------------------
  // Créer un nouvel utilisateur
  // --------------------------
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.usersService.create(createUserDto); // Appelle le service pour créer un utilisateur
    } catch (err) {
      throw new BadRequestException((err as Error).message);
    }
  }

  // --------------------------
  // Mettre à jour un utilisateur existant
  // --------------------------
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number, // ID de l'utilisateur à mettre à jour
    @Body() updateUserDto: UpdateUserDto, // Données à mettre à jour
  ): Promise<User> {
    try {
      return await this.usersService.update(id, updateUserDto); // Appelle le service pour mettre à jour l'utilisateur
    } catch (err) {
      throw new BadRequestException((err as Error).message);
    }
  }

  // --------------------------
  // Supprimer un utilisateur
  // --------------------------
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return await this.usersService.remove(id); // Appelle le service pour supprimer l'utilisateur
    } catch (err) {
      throw new BadRequestException((err as Error).message);
    }
  }
}
