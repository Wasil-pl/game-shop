import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderItemsDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  orderId: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;
}
