import { OrderStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
export declare class CreateOrderDTO {
    email: string;
    totalPrice: Decimal;
    totalQuantity: number;
    city: string;
    street: string;
    postalCode: string;
    address: string;
    message: string;
    status: OrderStatus;
}
