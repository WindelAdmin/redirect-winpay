import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GatewayStoneService } from './gateway-stone.service';

@Controller('gateway-stone')
export class GatewayStoneController {
  constructor(private readonly gatewayStoneService: GatewayStoneService) {}
  @Post()
  create(@Body() createGatewayStoneDto: any) {
    return this.gatewayStoneService.create(createGatewayStoneDto);
  }

  @Get('/cancel/:orderId')
  cancel(@Param('orderId') orderId: string) {
    return this.gatewayStoneService.canceled(orderId);
  }

  @Get('/order/:orderId')
  findOrder(@Param('orderId') orderId: string) {
    return this.gatewayStoneService.findByOrder(orderId);
  }
}
