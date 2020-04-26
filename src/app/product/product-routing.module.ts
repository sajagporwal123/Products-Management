import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductResolve } from './product.resolve';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: '',
    },
    component: ProductListComponent
  },
  {
    path: 'add',
    data: {
      breadcrumb: 'Add',
    },
    component: ProductAddEditComponent
  },
  {
    path: 'edit/:productId',
    resolve: {
      product: ProductResolve
    },
    data: {
      breadcrumb: 'Edit',
    },
    component: ProductAddEditComponent
  },
  {
    path: 'details/:productId',
    resolve: {
      product: ProductResolve
    },
    data: {
      breadcrumb: 'Details',
    },
    component: ProductViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
