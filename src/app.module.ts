import { Module } from '@nestjs/common';
import { GatewayVeroModule } from './gateway-vero/gateway-vero.module';
import { GatewayStoneModule } from './gateway-stone/gateway-stone.module';

@Module({
  imports: [GatewayVeroModule, GatewayStoneModule],
})
export class AppModule {}
