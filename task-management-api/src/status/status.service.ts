import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}

  async findOne(id: number): Promise<Status> {
    const status = await this.statusRepository.findOneBy({ status_id: id });
    if (!status) throw new NotFoundException(`Status with id ${id} not found`);
    return status;
  }

  async findAll(): Promise<Status[]> {
    return this.statusRepository.find();
  }

  async create(statusData: Partial<Status>): Promise<Status> {
    const status = this.statusRepository.create(statusData);
    return this.statusRepository.save(status);
  }

  async update(id: number, updateData: Partial<Status>): Promise<Status> {
    const status = await this.findOne(id);
    Object.assign(status, updateData);
    return this.statusRepository.save(status);
  }

  async remove(id: number): Promise<void> {
    const status = await this.findOne(id);
    await this.statusRepository.remove(status);
  }
}
