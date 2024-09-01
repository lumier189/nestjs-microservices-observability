import { ClientOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientConfigService {
  constructor(private config: ConfigService) {}

  getUsersClientPort(): number {
    return this.config.get<number>('USERS_CLIENT_PORT');
  }

  get usersClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getUsersClientPort(),
      },
    };
  }
}
