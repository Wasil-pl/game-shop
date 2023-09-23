import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BannersModule } from './banners/banners.module';
import { OrdersModule } from './orders/orders.module';
import configuration from './config/configuration';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductsModule,
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    BannersModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
