import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateGatewayStoneDto } from './dto/create-gateway-stone.dto';
import { GatewayStoneService } from './gateway-stone.service';

@Controller('gateway-stone')
export class GatewayStoneController {
  constructor(private readonly gatewayStoneService: GatewayStoneService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createGatewayStoneDto: CreateGatewayStoneDto) {
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
