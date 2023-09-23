import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class BannersService {
  constructor(private prismaService: PrismaService) {}

  public getBanners() {
    return this.prismaService.banner.findMany({});
  }
}
