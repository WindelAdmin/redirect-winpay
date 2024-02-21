import { Module } from '@nestjs/common';
import { GatewayVeroModule } from './gateway-vero/gateway-vero.module';

@Module({
  imports: [GatewayVeroModule],
})
export class AppModule {}
