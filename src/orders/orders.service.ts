import { BadRequestException, Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { DATA_ORDER_SELECTION } from 'src/consts';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  /* --------------------- GET ORDERS --------------------- */

  public getOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        user: {
          select: {
            id: false,
            email: true,
            firstName: true,
          },
        },

        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  /* --------------------- GET ORDER BY ID --------------------- */

  public getOrder(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      select: DATA_ORDER_SELECTION,
    });
  }

  /* --------------------- CREATE ORDER --------------------- */

  public async create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt' | 'userId'>,
    items: { productId: string; quantity: number }[],
    userId: string,
  ): Promise<Order> {
    let calculatedTotalQuantity = 0;
    let calculatedTotalPrice = 0;

    const orderItemsData = [];

    for (const item of items) {
      const product = await this.prismaService.product.findUnique({
        where: { id: item.productId },
      });

      if (!product) throw new BadRequestException('Product not found');

      if (product.salePrice) {
        calculatedTotalPrice += Number(product.salePrice) * item.quantity;
      } else {
        calculatedTotalPrice += Number(product.price) * item.quantity;
      }

      if (product.inStock <= 0) {
        throw new BadRequestException(
          `Product ${product.name} is out of stock.`,
        );
      }

      if (product.inStock < item.quantity) {
        throw new BadRequestException(
          `Not enough ${product.name} in stock. Only ${product.inStock} left.`,
        );
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
        userId: userId,
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
      select: DATA_ORDER_SELECTION,
    });
  }
}
