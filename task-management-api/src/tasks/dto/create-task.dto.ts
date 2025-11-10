export class CreateTaskDto {
  title: string;
  description?: string;
  priority?: number;
  status?: 'pending' | 'in_progress' | 'done';
  assigneeId?: number;
}
