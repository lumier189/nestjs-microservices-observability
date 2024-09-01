import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user-repository/user.repository';
import { ICreateUserDto, IUpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(id: string) {
    return this.userRepository.findById(id);
  }

  async create(data: ICreateUserDto) {
    return this.userRepository.create(data);
  }

  async update({ id, ...rest }: IUpdateUserDto) {
    return this.userRepository.update(id, rest);
  }

  async delete(data) {
    return this.userRepository.delete(data);
  }
}
