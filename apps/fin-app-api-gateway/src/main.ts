import { NestFactory } from '@nestjs/core';
import { FinAppApiGatewayModule } from './fin-app-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(FinAppApiGatewayModule);
  await app.listen(3000);
}
bootstrap();
