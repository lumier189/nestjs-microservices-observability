import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './database/entities/users';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRepository } from './database/repositories/user-repository/user.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: Number(3306),
      username: 'root',
      password: 'rootpassword',
      database: 'financial',
      autoLoadModels: true,
      synchronize: true,
      pool: {
        max: +(process.env.DATABASE_MAX_CONNECTIONS || 10),
        acquire: +(process.env.DATABASE_REQUEST_TIMEOUT || 30000),
      },
      logging: false,
      models: [User],
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
