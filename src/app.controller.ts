import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("nuevo")
  newEnpoint() {
    return "yo soy nuevo"
  }

  @Get("product/:productId")
  getProduct(@Param('productId') productId: string) {
    return `productos ${productId}`
  }

  @Get("categories/:id/product/:productId")
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} product ${productId}`
  }

  @Get("products/")
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0, @Query('brand') brand = "string") {
    return `productos limit ${limit}, offset ${offset}`
  }
}
