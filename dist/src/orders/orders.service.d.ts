import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getOrders(): Promise<Order[]>;
    getOrder(id: Order['id']): Promise<Order | null>;
    create(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'userId'>, items: {
        productId: string;
        quantity: number;
    }[], userId: string): Promise<Order>;
    updateOrderStatus(id: Order['id'], status: Order['status']): Promise<Order>;
}
