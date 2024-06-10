import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { winPay } from 'src/services/winpay';

@Injectable()
export class GatewayVeroService {
  async create(payload: any) {
    const create = await winPay()
      .then((resolve) => resolve.post('/gateway-vero', payload))
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

    console.log('Criou vero: ', create, JSON.stringify(payload, null, 4));
    return create;
  }

  async processing(orderId: string) {
    console.log('Processando vero: ', orderId);
    return winPay()
      .then((resolve) =>
        resolve.get(`/gateway-vero/order/${orderId}/processing`),
      )
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

  async payed(orderId: string, data: any) {
    console.log('Pago vero: ', orderId);
    return winPay()
      .then((resolve) =>
        resolve.post(`/gateway-vero/order/${orderId}/payed`, data),
      )
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

  async canceled(orderId: string) {
    console.log('Cancelado vero: ', orderId);
    return winPay()
      .then((resolve) => resolve.get(`/gateway-vero/order/${orderId}/canceled`))
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

  async failed(orderId: string, data: any) {
    console.log('Falha vero: ', JSON.stringify(orderId + data));
    return winPay()
      .then((resolve) =>
        resolve.post(`/gateway-vero/order/${orderId}/failed`, data),
      )
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

  closed() {
    throw new Error('Vero não precisa fechar a transação.');
  }

  async findByOrder(orderId: string) {
    console.log('Buscou vero: ', orderId);
    return winPay()
      .then((resolve) => resolve.get(`/gateway-vero/order/${orderId}`))
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

  async findBySerialNumber(serialNumber: string) {
    console.log('Buscou vero por serial: ', serialNumber);
    return winPay()
      .then((resolve) => resolve.get(`/gateway-vero/terminal/${serialNumber}`))
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

  async findBySerialNumberProccessing(serialNumber: string) {
    console.log('Buscou vero por serial processando: ', serialNumber);
    return winPay()
      .then((resolve) =>
        resolve.get(`/gateway-vero/terminal/processing/${serialNumber}`),
      )
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
