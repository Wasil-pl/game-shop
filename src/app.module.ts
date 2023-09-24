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
import { CORS_OPTIONS, STATIC_PATH } from './consts';
import { ServeStaticModule } from '@nestjs/serve-static';

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
    ServeStaticModule.forRoot(STATIC_PATH),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors(CORS_OPTIONS)).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
