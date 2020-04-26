import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryList, LocationList } from '../../data/static.data';
import { ValidateRequired } from '../../common/validator/custom-form-group.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../common/service/product.service';
import { IProduct } from '../../common/model/product.model';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  productAddEditForm: FormGroup;
  categoryList = CategoryList;
  locationList = LocationList;
  isFormSubmitted: Boolean = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.formInitialize();
    if (this.route.snapshot.data['product']) {
      this.updateForm(this.route.snapshot.data['product']);
    }

  }
  formInitialize() {
    this.productAddEditForm = this.fb.group({
      productId: [0],
      title: ['', [ValidateRequired, Validators.maxLength(50)]],
      imageUrl: ['', Validators.compose([Validators.required, Validators.pattern(/(https?:\/\/.*\.(?:jpeg|jpg|gif|png))/i)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(15)])],
      price: ['', Validators.compose([Validators.required, Validators.min(0)])],
      rating: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(5)])],
      isInStock: [true, Validators.required],
      category: [this.categoryList[0], [Validators.required]],
      locations: [, [Validators.required]],
      isActive: [true]
    });
  }

  updateForm(product) {
    this.productAddEditForm.patchValue(product);
  }

  async submit(event: Event) {
    try {
      this.isFormSubmitted = true;
      const product: IProduct = this.productAddEditForm.value;
      if (product.productId === 0) {
       await this.productService.addProduct(product);
      }else{
       await this.productService.updateProduct(product);
      }
      this.router.navigate(['/']);
    } catch (error) {
      console.log('error', error);
    }
  }
  cancel(): void {
    this.router.navigate(['/']);
  }

}
