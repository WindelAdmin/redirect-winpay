import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { winPay } from 'src/services/winpay';

@Injectable()
export class GatewayVeroService {
  async create(payload: any) {
    return winPay()
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
  }

  async processing(orderId: string) {
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
