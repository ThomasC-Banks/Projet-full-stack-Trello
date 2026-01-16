// src/projects/projects.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(projectData: Partial<Project>): Promise<Project> {
    const project = this.projectRepository.create(projectData); // TypeORM create
    return this.projectRepository.save(project); // sauvegarde en DB
  }

  async findOne(id: number): Promise<Project> {
    const project = await this.projectRepository.findOne({
      where: { project_id: id },
      relations: ['tasks'],
    });
    if (!project) throw new Error(`Project with id ${id} not found`);
    return project;
  }
}
