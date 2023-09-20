import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, ProductPlatform } from '@prisma/client';
import { multerOptions } from 'src/utils/upload.files';
import { CreateProductDto } from './dtos/create-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  public getProducts() {
    return this.productService.getProducts();
  }

  @Get('/:id')
  public async getProductById(
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Get('/platform/:platform')
  public async getProductByPlatform(
    @Param('platform') platform: ProductPlatform['platform'],
  ) {
    return this.productService.getProductByPlatform(platform);
  }

  @Post('/')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictures', maxCount: 5 },
      ],
      multerOptions,
    ),
  )
  public create(
    @Body() product: CreateProductDto,
    @Body('platform') platform: ProductPlatform[],
    @UploadedFiles()
    files: {
      mainPicture: Express.Multer.File[];
      pictures: Express.Multer.File[];
    },
  ) {
    const mainPicture = files.mainPicture[0]; // Ponieważ 'mainPicture' jest tablicą o maksymalnej liczbie elementów 1
    const pictures = files.pictures;
    return this.productService.create(product, platform, mainPicture, pictures);
  }
}
