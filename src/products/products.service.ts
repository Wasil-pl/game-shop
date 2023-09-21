import { BadRequestException, Injectable } from '@nestjs/common';
import { Picture, Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: {
        pictures: true,
      },
    });
  }

  public getProductById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
      include: {
        pictures: true,
      },
    });
  }

  public getPicturesByProductId(
    id: Picture['productId'],
  ): Promise<Picture[] | null> {
    return this.prismaService.picture.findMany({
      where: { productId: id },
    });
  }

  public getProductByPlatform(
    platform: Product['platform'],
  ): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where: { platform },
      include: {
        pictures: true,
      },
    });
  }

  public async create(
    productData: Omit<
      Product,
      'id' | 'createdAt' | 'updatedAt' | 'mainPicture'
    >,
  ): Promise<Product> {
    try {
      return await this.prismaService.product.create({
        data: productData,
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new BadRequestException('Product already exists');
      throw error;
    }
  }

  public async addFiles(
    productId: Product['id'],
    mainPicture: Express.Multer.File,
    pictures: Express.Multer.File[],
  ): Promise<Product> {
    const productData = await this.prismaService.product.findUnique({
      where: { id: productId },
    });

    if (!productData) throw new BadRequestException('Product not found');

    return await this.prismaService.product.update({
      where: { id: productId },
      data: {
        mainPicture: mainPicture.filename,
        pictures: {
          create: pictures.map((picture) => ({ url: picture.filename })),
        },
      },
    });
  }

  public async removeOldFiles(
    productId: Picture['productId'],
    oldFilesUrl: string[],
  ) {
    return this.prismaService.picture.deleteMany({
      where: {
        productId: productId,
        url: {
          in: oldFilesUrl,
        },
      },
    });
  }

  public async updateDataProduct(
    id: Product['id'],
    productData: Omit<
      Product,
      'id' | 'createdAt' | 'updatedAt' | 'mainPicture'
    >,
  ): Promise<Product> {
    try {
      return await this.prismaService.product.update({
        where: { id },
        data: productData,
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new BadRequestException('Product already exists');
      throw error;
    }
  }

  public async updateFilesProduct(
    productId: Product['id'],
    mainPicture: Express.Multer.File,
    pictures: Express.Multer.File[],
  ): Promise<Product> {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });

    if (!product) throw new BadRequestException('Product not found');

    return await this.prismaService.product.update({
      where: { id: productId },
      data: {
        mainPicture: mainPicture.filename,
        pictures: {
          create: pictures.map((picture) => ({ url: picture.filename })),
        },
      },
    });
  }
}
