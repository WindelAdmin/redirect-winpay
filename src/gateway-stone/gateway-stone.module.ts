import { Module } from '@nestjs/common';
import { GatewayStoneService } from './gateway-stone.service';
import { GatewayStoneController } from './gateway-stone.controller';

@Module({
  controllers: [GatewayStoneController],
  providers: [GatewayStoneService],
})
export class GatewayStoneModule {}
