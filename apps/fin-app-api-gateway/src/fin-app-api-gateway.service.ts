import { Injectable } from '@nestjs/common';

@Injectable()
export class FinAppApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
