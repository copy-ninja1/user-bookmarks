import { IsEmail, IsOptional } from 'class-validator';

export class editUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastNAme?: string;
}
