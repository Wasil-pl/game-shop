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
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { multerOptions } from 'src/utils/upload.files';
import { CreateProductDto } from './dtos/create-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { acceptedFileTypes } from 'src/consts';
import { deleteFile } from 'src/utils/deleteFile';
import { UpdateProductDto } from './dtos/update-product.dto';

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
    @Param('platform') platform: Product['platform'],
  ) {
    return this.productService.getProductByPlatform(platform);
  }

  @Post('/add')
  public createProduct(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Put('/add/files/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictures', maxCount: 5 },
      ],
      multerOptions,
    ),
  )
  public async addFiles(
    @UploadedFiles()
    files: {
      mainPicture: Express.Multer.File[];
      pictures: Express.Multer.File[];
    },
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    try {
      const mainPicture = files.mainPicture[0];
      const pictures = files.pictures;

      if (!mainPicture || !pictures)
        throw new BadRequestException('Files not found');

      if (!acceptedFileTypes.includes(mainPicture.mimetype))
        throw new BadRequestException('Invalid file type');

      if (
        pictures.some(
          (picture) => !acceptedFileTypes.includes(picture.mimetype),
        )
      )
        throw new BadRequestException('Invalid file type');

      return this.productService.addFiles(id, mainPicture, pictures);
    } catch (error) {
      deleteFile(files.mainPicture[0].filename);
      files.pictures.forEach((picture) => deleteFile(picture.filename));
      throw error;
    }
  }

  @Put('/update/:id')
  public async updateDataProduct(
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
    @Body() productData: UpdateProductDto,
  ) {
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');

    await this.productService.updateDataProduct(id, productData);
    return { message: 'Product updated successfully' };
  }

  @Put('/update/files/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictures', maxCount: 5 },
      ],
      multerOptions,
    ),
  )
  public async updateFiles(
    @UploadedFiles()
    files: {
      mainPicture: Express.Multer.File[];
      pictures: Express.Multer.File[];
    },
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    try {
      const mainPicture = files.mainPicture[0];
      const pictures = files.pictures;

      const product = await this.productService.getProductById(id);
      const OldMainPicture = product.mainPicture;
      const OldPictures = await this.productService.getPicturesByProductId(id);

      if (!mainPicture || !pictures)
        throw new BadRequestException('Files not found');

      if (!acceptedFileTypes.includes(mainPicture.mimetype))
        throw new BadRequestException('Invalid file type');

      if (
        pictures.some(
          (picture) => !acceptedFileTypes.includes(picture.mimetype),
        )
      )
        throw new BadRequestException('Invalid file type');

      this.productService.updateFilesProduct(id, mainPicture, pictures);
      deleteFile(OldMainPicture);
      OldPictures.forEach((picture) => deleteFile(picture.url));

      const oldFilesUrl = OldPictures.map((picture) => picture.url);
      await this.productService.removeOldFiles(id, oldFilesUrl);

      return { message: 'Product updated successfully' };
    } catch (error) {
      deleteFile(files.mainPicture[0].filename);
      files.pictures.forEach((picture) => deleteFile(picture.filename));
      throw error;
    }
  }
}
