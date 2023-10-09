import { BannersService } from './banners.service';
export declare class BannersController {
    private bannersService;
    constructor(bannersService: BannersService);
    getBanners(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        picture: string;
    }[]>;
}
