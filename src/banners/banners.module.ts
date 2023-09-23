import { Module } from '@nestjs/common';
import { BannersController } from './banners.controller';
import { BannersService } from './banners.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BannersController],
  providers: [BannersService],
  imports: [PrismaModule],
})
export class BannersModule {}
