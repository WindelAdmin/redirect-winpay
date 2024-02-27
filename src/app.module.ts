import { Module } from '@nestjs/common';
import { GatewayStoneModule } from './gateway-stone/gateway-stone.module';
import { GatewayVeroModule } from './gateway-vero/gateway-vero.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [GatewayVeroModule, GatewayStoneModule, WebhookModule],
})
export class AppModule {}
