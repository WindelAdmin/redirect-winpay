import { AxiosError } from 'axios';
import { winPay } from 'src/services/winpay';

export class WebhookService {
  async recievePaymentStone(data: any) {
    const create = await winPay()
      .then((resolve) => resolve.post('/webhook/transactions/stone', data))
      .then((response) => response.data)
      .catch((err) => {
        if (err instanceof AxiosError) {
          console.log('err: ', err);
        }
      });
    return create;
  }
}
