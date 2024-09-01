import { Module } from '@nestjs/common';
import { FinAppApiGatewayController } from './fin-app-api-gateway.controller';
import { FinAppApiGatewayService } from './fin-app-api-gateway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [FinAppApiGatewayController],
  providers: [FinAppApiGatewayService],
})
export class FinAppApiGatewayModule {}
