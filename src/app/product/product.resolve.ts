import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { IProduct } from '../common/model/product.model';
import { ProductService } from '../common/service/product.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ProductResolve implements Resolve<IProduct> {
    constructor(private productService: ProductService, private router: Router, private toastr: ToastrService) { }

    async resolve(route: ActivatedRouteSnapshot): Promise<IProduct> {
        try {
            const productId = route.params.productId ? route.params.productId : null;
            if (productId) {
                const product: IProduct = await this.productService.getProductById(Number(productId));
                return Promise.resolve(product);
            }
        } catch (error) {
            this.router.navigate(['/']);
            this.toastr.error(error, 'Error');
            return Promise.reject(error);
        }
    }
}
