import { genSalt, hash } from 'bcrypt';

import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  BeforeSave,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    allowNull: false,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name: string;

  @Column({
    allowNull: false,
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  password: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BeforeSave
  static async encryptPassword(user: User) {
    if (user.password) {
      const salt = await genSalt(10);
      user.password = await hash(user.password, salt);
    }
  }
}
