import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { winPay } from 'src/services/winpay';

@Injectable()
export class GatewayStoneService {
  async create(payload: any) {
    const create = await winPay()
      .then((resolve) => resolve.post('/gateway-stone', payload))
      .then((response) => response.data)
      .catch((err) => {
        if (err instanceof AxiosError) {
          const { data } = err.response;

          throw new BadRequestException({
            statusCode: data.statusCode,
            message: data.message,
          });
        }
      });
    console.log('Criou stone: ', create, JSON.stringify(payload, null, 4));
    return create;
  }

  async canceled(orderId: string) {
    console.log('Cancelou stone: ', JSON.stringify(orderId));
    return winPay()
      .then((resolve) => resolve.get(`/gateway-stone/cancel/${orderId}`))
      .then((response) => response.data)
      .catch((err) => {
        if (err instanceof AxiosError) {
          const { data } = err.response;

          throw new BadRequestException({
            statusCode: data.statusCode,
            message: data.message,
          });
        }
      });
  }

  async findByOrder(orderId: string) {
    console.log('Buscou stone: ', JSON.stringify(orderId));
    return winPay()
      .then((resolve) => resolve.get(`/gateway-stone/order/${orderId}`))
      .then((response) => response.data)
      .catch((err) => {
        if (err instanceof AxiosError) {
          const { data } = err.response;

          throw new BadRequestException({
            statusCode: data.statusCode,
            message: data.message,
          });
        }
      });
  }
}
