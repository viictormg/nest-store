import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { OrdersController } from './orders/orders.controller';
import { CustomersController } from './customers/customers.controller';
import { BrandsController } from './brands/brands.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    CustomersController,
    BrandsController
  ],

  providers: [AppService, ProductsService],
})
export class AppModule { }
