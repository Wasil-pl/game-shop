import { BadRequestException, Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  /* --------------------- GET ORDERS --------------------- */

  public getOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  /* --------------------- GET ORDER BY ID --------------------- */

  public getOrderById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  /* --------------------- CREATE ORDER --------------------- */

  public async create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
    items: { productId: string; quantity: number }[],
  ): Promise<Order> {
    let calculatedTotalQuantity = 0;
    let calculatedTotalPrice = 0;

    const orderItemsData = [];

    for (const item of items) {
      const product = await this.prismaService.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) throw new BadRequestException('Product not found');

      if (product.inStock < item.quantity) {
        throw new BadRequestException(
          `Product with ID ${item.productId} is not available in sufficient quantity.`,
        );
      }

      if (product.salePrice) {
        calculatedTotalPrice += Number(product.salePrice) * item.quantity;
      } else {
        calculatedTotalPrice += Number(product.price) * item.quantity;
      }

      calculatedTotalQuantity += item.quantity;

      orderItemsData.push({
        quantity: item.quantity,
        product: {
          connect: {
            id: item.productId,
          },
        },
      });
    }

    await this.prismaService.product.updateMany({
      where: { id: { in: items.map((item) => item.productId) } },
      data: { inStock: { decrement: calculatedTotalQuantity } },
    });

    return await this.prismaService.order.create({
      data: {
        ...orderData,
        totalQuantity: calculatedTotalQuantity,
        totalPrice: calculatedTotalPrice,
        items: {
          create: orderItemsData,
        },
      },
    });
  }

  /* --------------------- UPDATE ORDER STATUS --------------------- */

  public async updateOrderStatus(
    id: Order['id'],
    status: Order['status'],
  ): Promise<Order> {
    return await this.prismaService.order.update({
      where: { id },
      data: { status },
    });
  }
}
