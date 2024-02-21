import { Module } from '@nestjs/common';
import { GatewayVeroService } from './gateway-vero.service';
import { GatewayVeroController } from './gateway-vero.controller';

@Module({
  controllers: [GatewayVeroController],
  providers: [GatewayVeroService],
})
export class GatewayVeroModule {}
