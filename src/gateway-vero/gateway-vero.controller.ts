import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GatewayVeroService } from './gateway-vero.service';

@Controller('gateway-vero')
export class GatewayVeroController {
  constructor(private readonly gatewayVeroService: GatewayVeroService) {}
  @Post()
  async create(@Body() payload: any) {
    return this.gatewayVeroService.create(payload);
  }

  @Get('/order/:orderId')
  findOrder(@Param('orderId') orderId: string) {
    return this.gatewayVeroService.findByOrder(orderId);
  }

  @Get('/terminal/:serialNumber')
  async findOrderBySerialNumber(@Param('serialNumber') serialNumber: string) {
    const find = await this.gatewayVeroService.findBySerialNumber(serialNumber);

    return find;
  }

  @Get('/terminal/processing/:serialNumber')
  findOrderBySerialNumberProcessing(
    @Param('serialNumber') serialNumber: string,
  ) {
    return this.gatewayVeroService.findBySerialNumberProccessing(serialNumber);
  }

  @Post('/order/:orderId/payed')
  async payed(@Param('orderId') orderId: string, @Body() data: any) {
    return await this.gatewayVeroService.payed(orderId, data);
  }

  @Get('/order/:orderId/processing')
  async processing(@Param('orderId') orderId: string) {
    return await this.gatewayVeroService.processing(orderId);
  }

  @Get('/order/:orderId/canceled')
  async canceled(@Param('orderId') orderId: string) {
    return await this.gatewayVeroService.canceled(orderId);
  }

  @Post('/order/:orderId/failed')
  async failed(@Param('orderId') orderId: string, @Body() data: any) {
    return await this.gatewayVeroService.failed(orderId, data);
  }
}
