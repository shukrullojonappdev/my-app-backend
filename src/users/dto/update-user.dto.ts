import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // readonly id: number;
  // readonly firstName: string;
  // readonly lastName: string;
}
