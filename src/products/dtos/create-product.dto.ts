import { Platform } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 3)
  language: string;

  @IsNumber()
  @IsNotEmpty()
  pegi: number;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  inStock: number;

  @IsString()
  @IsNotEmpty()
  platform: Platform;

  @IsDecimal()
  @IsNotEmpty()
  price: Decimal;
}
