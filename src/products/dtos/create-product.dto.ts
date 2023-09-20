import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
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

  @IsString()
  @IsNotEmpty()
  mainPicture: string;

  @IsNumber()
  @IsNotEmpty()
  inStock: number;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  // @ValidateNested({ each: true })
  // @Type(() => ProductPlatformDto)
  // platforms: ProductPlatformDto[];
}
