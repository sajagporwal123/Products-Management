import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        // component: ProductsComponent
        data: {
          breadcrumb: 'Product',
        },
        loadChildren: () => import("./product/product.module").then(m => m.ProductModule),
      },
      {
        path: 'trash',
        data: {
          breadcrumb: 'Trash',
        },
        component: TrashComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
