import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity'
import { CreateProduct, Updateroduct } from '../dto/products.dto'


@Injectable()
export class ProductsService {
    private counterId = 1
    private products: Product[] = [
        { id: 1, name: "arroz", description: "ddd", price: 1999, image: "ddd", stock: 2 }
    ]

    findAll() {
        return this.products
    }

    findOne(id: number) {
        const product =  this.products.find(item => item.id == id)

        if(!product){
            throw new NotFoundException('no existe este producto')
        }
        return product
    }

    create(payload: CreateProduct) {
        this.counterId ++
        const newProduct = {
            id: this.counterId,
            ...payload
        }
        this.products.push(newProduct)
        return newProduct
    }

    update(id :number, payload: Updateroduct){
        let indice = 0;
        this.products.forEach((e, i) => {
            console.log(e.id == id);
            
            if(e.id == id){
                indice = i
                this.products[i] = {
                    ...this.products[i],
                    ...payload
                }
                
            }   
        })
        return this.products[indice]

    }
}

