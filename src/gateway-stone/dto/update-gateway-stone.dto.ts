import { PartialType } from '@nestjs/mapped-types';
import { CreateGatewayStoneDto } from './create-gateway-stone.dto';

export class UpdateGatewayStoneDto extends PartialType(CreateGatewayStoneDto) {}
