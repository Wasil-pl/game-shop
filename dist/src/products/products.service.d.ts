/// <reference types="multer" />
import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getProducts(): Promise<Product[]>;
    getProductsIsActive(): Promise<Product[]>;
    getProductById(id: Product['id']): Promise<Product | null>;
    getProductByPlatform(platform: Product['platform']): Promise<Product[]>;
    getProductsBySearchPhrase(searchPhrase: string): Promise<Product[]>;
    create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'mainPicture' | 'pictureOne' | 'pictureTwo' | 'pictureThree' | 'pictureFour' | 'pictureFive' | 'isActive'>): Promise<Product>;
    addFiles(productId: Product['id'], mainPicture: Express.Multer.File, pictureOne: Express.Multer.File, pictureTwo: Express.Multer.File, pictureThree: Express.Multer.File, pictureFour: Express.Multer.File, pictureFive: Express.Multer.File): Promise<Product>;
    addIsActive(id: Product['id'], isActive: Product['isActive']): Promise<Product>;
    updateDataProduct(id: Product['id'], productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'mainPicture' | 'pictureOne' | 'pictureTwo' | 'pictureThree' | 'pictureFour' | 'pictureFive'>): Promise<Product>;
    updateFilesProduct(productId: Product['id'], mainPicture: Express.Multer.File, pictureOne: Express.Multer.File, pictureTwo: Express.Multer.File, pictureThree: Express.Multer.File, pictureFour: Express.Multer.File, pictureFive: Express.Multer.File): Promise<Product>;
    updateIsActive(id: Product['id'], isActive: Product['isActive']): Promise<Product>;
    delete(id: Product['id']): Promise<Product>;
}
