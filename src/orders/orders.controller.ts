import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Req,
  UseGuards,
  Request,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order, OrderStatus } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { CreateOrderItemsDTO } from './dtos/create-order-items.dto';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  /* --------------------- GET ORDERS --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  public getOrders() {
    return this.orderService.getOrders();
  }

  /* --------------------- GET ORDER BY ID --------------------- */

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  public async getOrderById(
    @Param('id', new ParseUUIDPipe()) id: Order['id'],
    @Req() req: any,
  ) {
    const order = await this.orderService.getOrder(id);
    if (!order) throw new NotFoundException('Order not found');

    const userId = req.user.id;
    if (order.userId !== userId && req.user.role !== 'ADMIN') {
      throw new BadRequestException(
        'You are not authorized to view this order.',
      );
    }

    return order;
  }

  /* --------------------- CREATE ORDER --------------------- */

  @UseGuards(JwtAuthGuard)
  @Post('/')
  public async createOrder(
    @Body()
    data: {
      orderData: CreateOrderDTO;
      items: CreateOrderItemsDTO[];
    },
    @Request() req,
  ): Promise<Order> {
    const { orderData, items } = data;

    if (!orderData || !items || items.length === 0) {
      throw new BadRequestException('Invalid order data or items.');
    }

    const userId = req.user.id;

    return this.orderService.create(orderData, items, userId);
  }

  /* --------------------- UPDATE ORDER STATUS --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  public async updateOrderStatus(
    @Param('id', new ParseUUIDPipe()) id: Order['id'],
    @Body() data: { status: Order['status'] },
  ): Promise<Order> {
    const { status } = data;

    if (!Object.values(OrderStatus).includes(status)) {
      throw new BadRequestException('Invalid status.');
    }

    return this.orderService.updateOrderStatus(id, status);
  }
}
