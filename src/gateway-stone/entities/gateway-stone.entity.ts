export class GatewayStone {
  id?: string;
  status?: string;
  serviceRefererName?: string;
  authorization?: string;
  cpfCnpj?: string;
  customer?: {
    name: string;
    email?: string;
  };
  items: {
    amount?: number;
    description?: string;
    quantity?: string;
    code?: string;
  };
  closed: boolean;
  poi_payment_settings: {
    visible?: string;
    print_order_receipt?: boolean;
    devices_serial_number?: string;
    display_name?: string;
    payment_setup?: {
      type?: string;
      installments?: number;
      installment_type?: string;
    };
  };
  transactionId?: string;
  origin: string;
}
