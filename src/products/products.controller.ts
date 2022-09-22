import { Controller, Param, Get, Query, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service'
import { ParseIntPipe} from '../common/parse-int.pipe'
import { CreateProduct, Updateroduct }  from '../dto/products.dto'

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {

    }
    @Get("/:productId")
    get(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.findOne(productId)
    }
    @Get("/")
    getAll(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand = "string") {
        return this.productService.findAll()
    }
    @Post("/")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() payload: CreateProduct) {
        console.log(payload);
        
        return this.productService.create(payload)
    }
    @Put("/:id")
    update(@Param('id') id: number, @Body() payload: Updateroduct) {
        return this.productService.update(id, payload)
    }

    @Delete("/:productId")
    delete(@Param('productId') productId: string) {
        return {
            message: `Eliminando producto ${productId}`
        }
    }

}
