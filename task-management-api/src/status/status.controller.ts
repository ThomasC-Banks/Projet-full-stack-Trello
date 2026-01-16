import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from './status.entity';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  findAll(): Promise<Status[]> {
    return this.statusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Status> {
    return this.statusService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Status>): Promise<Status> {
    return this.statusService.create(body);
  }
}
