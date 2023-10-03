import { OrderStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { IsDecimal, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsDecimal()
  totalPrice: Decimal;

  @IsNotEmpty()
  @IsInt()
  totalQuantity: number;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @IsString()
  address: string;

  @IsNotEmpty()
  status: OrderStatus;
}
