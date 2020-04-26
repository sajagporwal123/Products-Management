import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../common/pipe/pipe.module';


@NgModule({
  declarations: [ProductListComponent, ProductViewComponent, ProductAddEditComponent ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    RouterModule,
    PipeModule
  ]
})
export class ProductModule { }
