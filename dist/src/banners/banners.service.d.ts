import { PrismaService } from 'src/shared/services/prisma.service';
export declare class BannersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getBanners(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        picture: string;
    }[]>;
}
