import { Component, OnInit } from '@angular/core';
import { IProduct } from '../common/model/product.model';
import { ProductService } from '../common/service/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashedProductList: IProduct[] = [];
  constructor(private productService: ProductService, private toastr: ToastrService) { }

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
      await this.productService.statusChange(productId);
      this.toastr.success('Product Restored Succsessfully', 'Success');
      this.getAllProductList();
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }
  async deleteProduct(productId: IProduct['productId']) {
    try {
      await this.productService.deleteProduct(productId);
      this.toastr.success('Product Deleted Succsessfully', 'Success');
      this.getAllProductList();
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }
}
