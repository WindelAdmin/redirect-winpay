import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { GatewayStone } from '../entities/gateway-stone.entity';

class CustomerStone {
  @ApiProperty({
    description: 'Nome do consumidor',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'E-mail do consumidor',
    required: false,
  })
  email?: string;
}

class ItemsStone {
  @ApiProperty({
    description: 'Valor do item',
    required: true,
  })
  amount?: number;

  @ApiProperty({
    description: 'Descrição do item',
    required: true,
  })
  description?: string;

  @ApiProperty({
    description: 'Quantidade do item',
    required: true,
  })
  quantity?: string;

  code?: string;
}
class PaymentSetupStone {
  @ApiProperty({
    description: 'Tipo do pagamento',
    required: true,
  })
  pType?: string;

  @ApiProperty({
    description: 'Quantidade de vezes no crédito',
    required: false,
  })
  installments?: number;

  @ApiProperty({
    description: 'Tipo de parcelamento',
    required: false,
  })
  installment_type?: string;
}
class PoiPaymentSettingsStone {
  visible?: string;

  print_order_receipt?: boolean;

  @ApiProperty({
    description: 'Número de serial da maquininha',
  })
  devices_serial_number?: string;

  display_name?: string;

  @ApiProperty({
    type: PaymentSetupStone,
  })
  payment_setup?: PaymentSetupStone;
}

export class CreateGatewayStoneDto extends GatewayStone {
  @ApiProperty({
    example: 'sk_',
    required: true,
  })
  @IsNotEmpty({
    message: 'Authorization',
  })
  authorization?: string;

  @ApiProperty({
    required: false,
  })
  cpfCnpj?: string;

  @ApiProperty({
    required: true,
    type: CustomerStone,
  })
  @IsNotEmpty({
    message: 'Customer',
  })
  customer?: CustomerStone;

  @ApiProperty({
    required: true,
    type: ItemsStone,
  })
  @IsNotEmpty({
    message: 'Items',
  })
  items: ItemsStone;

  @ApiProperty({
    required: true,
    type: PoiPaymentSettingsStone,
  })
  @IsNotEmpty({
    message: 'poi_payment_settings',
  })
  poi_payment_settings: PoiPaymentSettingsStone;

  @ApiProperty({
    description: 'Campo para identificar a transação.',
    required: false,
  })
  transactionId?: string;

  @ApiProperty({
    description:
      'Campo para identificar a origem da requisição, podendo ser "windelweb" ou "windeldesk".',
    enum: ['windelweb', 'windeldesk'],
    required: true,
  })
  @IsNotEmpty({
    message: 'origin',
  })
  origin: string;
}
