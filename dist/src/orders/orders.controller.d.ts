import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { CreateOrderItemsDTO } from './dtos/create-order-items.dto';
export declare class OrdersController {
    private orderService;
    constructor(orderService: OrdersService);
    getOrders(): Promise<{
        id: string;
        userId: string;
        totalQuantity: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        city: string;
        street: string;
        postalCode: string;
        address: string;
        message: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getOrderById(id: Order['id'], req: any): Promise<{
        id: string;
        userId: string;
        totalQuantity: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        city: string;
        street: string;
        postalCode: string;
        address: string;
        message: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createOrder(data: {
        orderData: CreateOrderDTO;
        items: CreateOrderItemsDTO[];
    }, req: any): Promise<Order>;
    updateOrderStatus(id: Order['id'], data: {
        status: Order['status'];
    }): Promise<Order>;
}
