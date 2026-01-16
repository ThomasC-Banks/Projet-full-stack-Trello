import {
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
  IsUUID,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  priority?: number;

  @IsOptional()
  @IsUUID()
  project_id?: string;

  @IsOptional()
  @IsNumber()
  status_id?: number;

  @IsOptional()
  @IsDateString()
  due_date?: string;
}
