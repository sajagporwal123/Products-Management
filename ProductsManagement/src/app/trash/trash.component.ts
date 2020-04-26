import { Component, OnInit } from '@angular/core';
import { IProduct } from '../common/model/product.model';
import { ProductService } from '../common/service/product.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashedProductList: IProduct[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProductList();
  }
  async getAllProductList() {
    try {
      this.trashedProductList = await this.productService.getProductsByStatus(false);
    } catch (error) {
      console.log('error', error);
    }
  }
  async statusChange(productId: IProduct['productId']) {
    try {
      console.log('productId', productId);
      const updatedData = await this.productService.statusChange(productId);
      this.getAllProductList();
    } catch (error) {
      console.log('error', error);
    }
  }
  async deleteProduct(productId: IProduct['productId']) {
    try {
      console.log('productId', productId);
      const updatedData = await this.productService.deleteProduct(productId);
      this.getAllProductList();
    } catch (error) {
      console.log('error', error);
    }
  }
}
