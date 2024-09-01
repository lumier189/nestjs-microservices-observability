import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { USERS_CLIENT } from './constant';
import { UsersController } from './controllers/users.controller';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/services/client-config.service';

@Module({
  imports: [ClientConfigModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USERS_CLIENT,
      useFactory: (configService: ClientConfigService) => {
        const clientOptions = configService.usersClientOptions;
        return ClientProxyFactory.create(clientOptions);
      },
      inject: [ClientConfigService],
    },
  ],
})
export class UsersModule {}
