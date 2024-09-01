import { Controller } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { MessagePattern } from '@nestjs/microservices';
import { User } from '../database/entities/users';
import {
  ICreateUserDto,
  IDeleteUserDto,
  IUpdateUserDto,
} from '../dtos/user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.findOne')
  async findOne(id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @MessagePattern('users.create')
  async create(data: ICreateUserDto): Promise<User> {
    return this.usersService.create(data);
  }

  @MessagePattern('users.update')
  async update(data: IUpdateUserDto): Promise<[number, User[]]> {
    return this.usersService.update(data);
  }

  @MessagePattern('users.delete')
  async delete(data: IDeleteUserDto): Promise<number | null> {
    return this.usersService.delete(data);
  }
}
