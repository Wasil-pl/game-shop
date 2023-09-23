import { OrderStatus } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  status: OrderStatus;
}
