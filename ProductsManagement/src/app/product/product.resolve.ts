import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IProduct } from '../common/model/product.model';
import { ProductService } from '../common/service/product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolve implements Resolve<IProduct> {
    constructor(private productService: ProductService) { }

    async resolve(route: ActivatedRouteSnapshot): Promise<IProduct> {
        try {
            const productId = route.params['productId'] ? route.params['productId'] : null;
            if (productId) {
                const product: IProduct = await this.productService.getProductById(Number(productId));
                console.log('product',product);
                return Promise.resolve(product);
            }
        } catch (error) {
            console.log('error', error);
            return Promise.reject(error);
        }
    }
}