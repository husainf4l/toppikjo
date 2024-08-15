import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';

const routes: Routes = [
  {
    path: 'bags/:id',
    component: SubCategoryComponent
  },
  {
    path: '',
    loadComponent: () =>
      import('./product-home/product-home.component').then(
        (m) => m.ProductHomeComponent
      ),
  },
  {
    path: 'bags',
    component: ProductBagsComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
