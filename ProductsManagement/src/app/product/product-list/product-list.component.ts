import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../common/service/product.service';
import { IProduct } from '../../common/model/product.model';
import { CategoryList, LocationList } from '../../data/static.data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  allProductList: IProduct[] = [];
  filteredProductList: IProduct[] = [];
  categoryList = CategoryList;
  locationList = LocationList;
  selectedCategory = '';
  selectedLocation = '';
  selectedPriceRange = [];
  selectedRating;
  availability;
  text;
  constructor(private productService: ProductService) { }

  choose(value) {
    console.log('value', value);
  }

  ngOnInit() {
    this.getAllProductList();
  }
  async getAllProductList() {
    try {
      this.allProductList = await this.productService.getProductsByStatus(true);
      this.filteredProductList = this.allProductList;
      console.log('this.filteredProductList', this.filteredProductList);
    } catch (error) {
      console.log('error', error);
    }
  }
  filterChange(type, value) {
    console.log('type', type);
    console.log('value', value);
    if (type === 'rating') {
      this.selectedRating = value;
    }
  }

  async statusChange(productId: IProduct['productId']) {
    try {
      console.log('productId',productId);
      const updatedData = await this.productService.statusChange(productId);
      this.getAllProductList();
    } catch (error) {
      console.log('error', error);
    }
  }
}
