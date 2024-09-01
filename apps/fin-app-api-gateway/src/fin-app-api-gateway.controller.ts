import { Controller, Get } from '@nestjs/common';
import { FinAppApiGatewayService } from './fin-app-api-gateway.service';

@Controller()
export class FinAppApiGatewayController {
  constructor(
    private readonly finAppApiGatewayService: FinAppApiGatewayService,
  ) {}

  @Get()
  getHello(): string {
    return this.finAppApiGatewayService.getHello();
  }
}
