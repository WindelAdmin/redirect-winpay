import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private webhookService: WebhookService) {}
  @Post('transactions/stone')
  transactions(@Body() data: any) {
    this.webhookService.recievePaymentStone(data);
    throw new HttpException({}, HttpStatus.OK);
  }
}
