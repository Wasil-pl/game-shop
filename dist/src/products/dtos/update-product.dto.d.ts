import { Platform } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
export declare class UpdateProductDto {
    name: string;
    language: string;
    pegi: number;
    description: string;
    inStock: number;
    isActive: boolean;
    platform: Platform;
    price: Decimal;
    salePrice: Decimal | null;
}
