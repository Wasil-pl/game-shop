import { BadRequestException, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany({});
  }

  public getProductById(id: Product['id']): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  public getProductByPlatform(
    platform: Product['platform'],
  ): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where: { platform },
    });
  }

  public async create(
    productData: Omit<
      Product,
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'mainPicture'
      | 'pictureOne'
      | 'pictureTwo'
      | 'pictureThree'
      | 'pictureFour'
      | 'pictureFive'
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
    pictureOne: Express.Multer.File,
    pictureTwo: Express.Multer.File,
    pictureThree: Express.Multer.File,
    pictureFour: Express.Multer.File,
    pictureFive: Express.Multer.File,
  ): Promise<Product> {
    const productData = await this.prismaService.product.findUnique({
      where: { id: productId },
    });

    if (!productData) throw new BadRequestException('Product not found');

    return await this.prismaService.product.update({
      where: { id: productId },
      data: {
        mainPicture: mainPicture?.filename,
        pictureOne: pictureOne?.filename,
        pictureTwo: pictureTwo?.filename,
        pictureThree: pictureThree?.filename,
        pictureFour: pictureFour?.filename,
        pictureFive: pictureFive?.filename,
      },
    });
  }

  public async updateDataProduct(
    id: Product['id'],
    productData: Omit<
      Product,
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'mainPicture'
      | 'pictureOne'
      | 'pictureTwo'
      | 'pictureThree'
      | 'pictureFour'
      | 'pictureFive'
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
    pictureOne: Express.Multer.File,
    pictureTwo: Express.Multer.File,
    pictureThree: Express.Multer.File,
    pictureFour: Express.Multer.File,
    pictureFive: Express.Multer.File,
  ): Promise<Product> {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });

    if (!product) throw new BadRequestException('Product not found');

    return await this.prismaService.product.update({
      where: { id: productId },
      data: {
        mainPicture: mainPicture.filename,
        pictureOne: pictureOne ? pictureOne.filename : null,
        pictureTwo: pictureTwo ? pictureTwo.filename : null,
        pictureThree: pictureThree ? pictureThree.filename : null,
        pictureFour: pictureFour ? pictureFour.filename : null,
        pictureFive: pictureFive ? pictureFive.filename : null,
      },
    });
  }
}
