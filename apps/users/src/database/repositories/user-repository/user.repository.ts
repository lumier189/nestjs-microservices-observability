import { Injectable } from '@nestjs/common';
import { User } from '../../entities/users';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(data: any): Promise<User> {
    try {
      return await this.userModel.create(data);
    } catch (error) {
      console.log(error.message)
      throw new Error(error.message)
    }
    return this.userModel.create(data);
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  async findAll(options?): Promise<User[]> {
    return this.userModel.findAll(options);
  }

  async update(id: string, data: Partial<User>): Promise<[number, User[]]> {
    return this.userModel.update(data, { where: { id }, returning: true });
  }

  async delete(id: string): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }

  async findWithPassword(email: string): Promise<User | null> {
    return this.userModel.scope('withPassword').findOne({ where: { email } });
  }
}
