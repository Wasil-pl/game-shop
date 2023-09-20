import { BadRequestException, Injectable } from '@nestjs/common';
import { Product, ProductPlatform } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        platforms: true,
        pictures: true,
      },
    });
  }

  public getProductById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        platforms: true,
        pictures: true,
      },
    });
  }

  public getProductByPlatform(
    platform: ProductPlatform['platform'],
  ): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where: {
        platforms: {
          some: {
            platform: platform,
          },
        },
      },
      include: {
        platforms: true,
        pictures: true,
      },
    });
  }

  public async create(
    productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
    platforms: ProductPlatform[],
    mainPicture: Express.Multer.File,
    pictures: Express.Multer.File[],
  ): Promise<Product> {
    try {
      return await this.prismaService.product.create({
        data: {
          ...productData,
          mainPicture: mainPicture.filename,
          platforms: {
            create: platforms.map((platform) => ({
              platform: platform.platform,
              price: platform.price,
            })),
          },
          pictures: {
            create: pictures.map((picture) => ({ url: picture.filename })),
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new BadRequestException('Product already exists');
      throw error;
    }
  }
}
