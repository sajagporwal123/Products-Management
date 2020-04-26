import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../common/model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: IProduct;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['product']) {
      this.product = this.route.snapshot.data['product'];
    }
  }

}
