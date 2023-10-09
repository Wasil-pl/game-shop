import { Platform } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
export declare class CreateProductDto {
    name: string;
    language: string;
    pegi: number;
    description: string;
    inStock: number;
    platform: Platform;
    price: Decimal;
    salePrice: Decimal | null;
}
