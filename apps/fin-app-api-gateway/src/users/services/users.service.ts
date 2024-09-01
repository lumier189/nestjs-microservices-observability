import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_CLIENT } from '../constant';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_CLIENT) private readonly usersClient: ClientProxy,
  ) {}

  async findOne(id: string) {
    return this.usersClient.send<string[]>('users.findOne', id);
  }

  async create(data) {
    return this.usersClient.send<string>('users.create', data);
  }

  async update(data) {
    return this.usersClient.send<string>('users.update', data);
  }

  async delete(id: string) {
    return this.usersClient.send<string>('users.delete', id);
  }
}
