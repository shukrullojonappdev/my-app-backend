import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    role.value = createRoleDto.value;
    role.description = createRoleDto.description;

    return this.roleRepository.save(role);
  }

  async getRoleByValue(value: string): Promise<Role> {
    const roles = await this.roleRepository.find();
    return roles.find((role) => role.value === value);
  }
}
