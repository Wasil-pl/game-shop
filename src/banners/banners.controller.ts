import { Controller, Get } from '@nestjs/common';
import { BannersService } from './banners.service';

@Controller('banners')
export class BannersController {
  constructor(private bannersService: BannersService) {}

  @Get('/')
  public getBanners() {
    return this.bannersService.getBanners();
  }
}
