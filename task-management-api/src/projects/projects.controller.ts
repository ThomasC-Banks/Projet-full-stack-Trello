// src/projects/projects.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './projects.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() projectData: Partial<Project>): Promise<Project> {
    return this.projectsService.create(projectData);
  }

  @Get(':id')
  async getProject(@Param('id') id: number): Promise<Project> {
    return this.projectsService.findOne(id);
  }
}
