import { GatewayStone } from '../entities/gateway-stone.entity';

class CustomerStone {
  name: string;

  email?: string;
}

class ItemsStone {
  amount?: number;

  description?: string;

  quantity?: string;

  code?: string;
}
class PaymentSetupStone {
  pType?: string;

  installments?: number;

  installment_type?: string;
}
class PoiPaymentSettingsStone {
  visible?: string;

  print_order_receipt?: boolean;

  devices_serial_number?: string;

  display_name?: string;

  payment_setup?: PaymentSetupStone;
}

export class CreateGatewayStoneDto extends GatewayStone {
  authorization?: string;

  cpfCnpj?: string;

  customer?: CustomerStone;

  items: ItemsStone;

  poi_payment_settings: PoiPaymentSettingsStone;

  transactionId?: string;

  origin: string;
}
