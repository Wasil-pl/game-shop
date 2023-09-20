import { IsNotEmpty, IsNumber } from 'class-validator';

export class ProductPlatformDto {
  @IsNotEmpty()
  platform: string; // lub jakiś inny odpowiedni walidator

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
