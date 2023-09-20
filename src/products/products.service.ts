import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public async getProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        platform: true,
        pictures: true,
      },
    });
  }
}
