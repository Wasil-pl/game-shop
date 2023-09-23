import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UploadedFiles,
  UseGuards,
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
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  /* --------------------- GET --------------------- */

  @Get('/')
  public getProducts() {
    return this.productService.getProducts();
  }

  /* --------------------- GET BY ID --------------------- */

  @Get('/:id')
  public async getProductById(
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  /* --------------------- GET BY PLATFORM --------------------- */

  @Get('/platform/:platform')
  public async getProductByPlatform(
    @Param('platform') platform: Product['platform'],
  ) {
    return this.productService.getProductByPlatform(platform);
  }

  /* --------------------- GET BY SEARCH PHRASE --------------------- */

  @Get('/search/:searchPhrase')
  public async getProductsBySearchPhrase(
    @Param('searchPhrase') searchPhrase: string,
  ) {
    return this.productService.getProductsBySearchPhrase(searchPhrase);
  }

  /* --------------------- POST DATA --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('/add')
  public createProduct(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  /* --------------------- POST FILES --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Put('/add/files/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictureOne', maxCount: 1 },
        { name: 'pictureTwo', maxCount: 1 },
        { name: 'pictureThree', maxCount: 1 },
        { name: 'pictureFour', maxCount: 1 },
        { name: 'pictureFive', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  public async addFiles(
    @UploadedFiles()
    files: {
      mainPicture: Express.Multer.File;
      pictureOne?: Express.Multer.File;
      pictureTwo?: Express.Multer.File;
      pictureThree?: Express.Multer.File;
      pictureFour?: Express.Multer.File;
      pictureFive?: Express.Multer.File;
    },
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    try {
      const mainPicture = files.mainPicture?.[0];
      const pictureOne = files.pictureOne?.[0];
      const pictureTwo = files.pictureTwo?.[0];
      const pictureThree = files.pictureThree?.[0];
      const pictureFour = files.pictureFour?.[0];
      const pictureFive = files.pictureFive?.[0];

      if (mainPicture && !acceptedFileTypes.includes(mainPicture.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureOne && !acceptedFileTypes.includes(pictureOne.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureTwo && !acceptedFileTypes.includes(pictureTwo.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureThree && !acceptedFileTypes.includes(pictureThree.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureFour && !acceptedFileTypes.includes(pictureFour.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureFive && !acceptedFileTypes.includes(pictureFive.mimetype))
        throw new BadRequestException('Invalid file type');

      return this.productService.addFiles(
        id,
        mainPicture,
        pictureOne,
        pictureTwo,
        pictureThree,
        pictureFour,
        pictureFive,
      );
    } catch (error) {
      for (const key in files) {
        if (files[key]) {
          deleteFile(files[key][0].filename);
        }
      }
      throw error;
    }
  }

  /* --------------------- PUT DATA --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
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

  /* --------------------- PUT FILES --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Put('/update/files/:id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'mainPicture', maxCount: 1 },
        { name: 'pictureOne', maxCount: 1 },
        { name: 'pictureTwo', maxCount: 1 },
        { name: 'pictureThree', maxCount: 1 },
        { name: 'pictureFour', maxCount: 1 },
        { name: 'pictureFive', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  public async updateFiles(
    @UploadedFiles()
    files: {
      mainPicture: Express.Multer.File;
      pictureOne?: Express.Multer.File;
      pictureTwo?: Express.Multer.File;
      pictureThree?: Express.Multer.File;
      pictureFour?: Express.Multer.File;
      pictureFive?: Express.Multer.File;
    },
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    try {
      const mainPicture = files.mainPicture?.[0];
      const pictureOne = files.pictureOne?.[0];
      const pictureTwo = files.pictureTwo?.[0];
      const pictureThree = files.pictureThree?.[0];
      const pictureFour = files.pictureFour?.[0];
      const pictureFive = files.pictureFive?.[0];

      const product = await this.productService.getProductById(id);
      if (!product) throw new NotFoundException('Product not found');

      if (!mainPicture) throw new BadRequestException('Main picture required');

      if (mainPicture && !acceptedFileTypes.includes(mainPicture.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureOne && !acceptedFileTypes.includes(pictureOne.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureTwo && !acceptedFileTypes.includes(pictureTwo.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureThree && !acceptedFileTypes.includes(pictureThree.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureFour && !acceptedFileTypes.includes(pictureFour.mimetype))
        throw new BadRequestException('Invalid file type');

      if (pictureFive && !acceptedFileTypes.includes(pictureFive.mimetype))
        throw new BadRequestException('Invalid file type');

      this.productService.updateFilesProduct(
        id,
        mainPicture,
        pictureOne,
        pictureTwo,
        pictureThree,
        pictureFour,
        pictureFive,
      );

      const oldMainPicture = product.mainPicture;
      const oldPictureOne = product.pictureOne;
      const oldPictureTwo = product.pictureTwo;
      const oldPictureThree = product.pictureThree;
      const oldPictureFour = product.pictureFour;
      const oldPictureFive = product.pictureFive;

      if (oldMainPicture) deleteFile(oldMainPicture);
      if (oldPictureOne) deleteFile(oldPictureOne);
      if (oldPictureTwo) deleteFile(oldPictureTwo);
      if (oldPictureThree) deleteFile(oldPictureThree);
      if (oldPictureFour) deleteFile(oldPictureFour);
      if (oldPictureFive) deleteFile(oldPictureFive);

      return { message: 'Product updated successfully' };
    } catch (error) {
      for (const key in files) {
        if (files[key]) {
          deleteFile(files[key][0].filename);
        }
      }

      throw error;
    }
  }

  /* --------------------- UPDATE ACTIVE STATUS --------------------- */

  @Put('/update/activate/:id')
  public async updateIsActive(
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
    @Body() data: Product['isActive'],
  ) {
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');

    await this.productService.updateIsActive(id, data);
    return { message: 'Product active status updated successfully' };
  }

  /* --------------------- DELETE --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  public async deleteProduct(
    @Param('id', new ParseUUIDPipe()) id: Product['id'],
  ) {
    const product = await this.productService.getProductById(id);
    if (!product) throw new NotFoundException('Product not found');

    await this.productService.delete(id);

    const mainPicture = product.mainPicture;
    const pictureOne = product.pictureOne;
    const pictureTwo = product.pictureTwo;
    const pictureThree = product.pictureThree;
    const pictureFour = product.pictureFour;
    const pictureFive = product.pictureFive;

    if (mainPicture) deleteFile(mainPicture);
    if (pictureOne) deleteFile(pictureOne);
    if (pictureTwo) deleteFile(pictureTwo);
    if (pictureThree) deleteFile(pictureThree);
    if (pictureFour) deleteFile(pictureFour);
    if (pictureFive) deleteFile(pictureFive);

    return { message: 'Product deleted successfully' };
  }
}
