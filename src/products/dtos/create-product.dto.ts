import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  pegi: number;

  @IsString()
  @IsNotEmpty()
  mainPicture: string;

  @IsNumber()
  @IsNotEmpty()
  inStock: number;

  @IsArray()
  @IsNotEmpty()
  pictures: string[];

  @IsString()
  @IsNotEmpty()
  @Length(2, 3)
  language: string;
}
