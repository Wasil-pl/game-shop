import { OrderStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsDecimal()
  totalPrice: Decimal;

  @IsNotEmpty()
  @IsInt()
  totalQuantity: number;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  status: OrderStatus;
}
