import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/service/product.service';
import { IProduct } from '../../common/model/product.model';
import { CategoryList, LocationList, RatingList } from '../../data/static.data';
import { FilterListPipe } from '../../common/pipe/filter-list.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [FilterListPipe]
})
export class ProductListComponent implements OnInit {
  allProductList: IProduct[] = [];
  categoryList = CategoryList;
  locationList = LocationList;
  ratingOptionList = RatingList;
  filterCriteria = {
    category: '',
    locations: '',
    rating: '',
    isInStock: true,
    title: ''
  };
  matchingCriteria = {
    category: 'equal',
    locations: 'inArray',
    rating: 'greaterThenOrEqual',
    isInStock: 'equal',
    title: 'consist'
  };
  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllProductList();
  }
  async getAllProductList() {
    try {
      this.allProductList = await this.productService.getProductsByStatus(true);
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }
  async statusChange(productId: IProduct['productId']) {
    try {
      await this.productService.statusChange(productId);
      this.toastr.success('Product Deleted Succsessfully', 'Success');
      this.getAllProductList();
    } catch (error) {
      this.toastr.error(error, 'Error');
    }
  }
}
