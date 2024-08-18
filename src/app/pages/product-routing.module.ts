import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
  {
    path: 'shop',
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
    path: 'detail/:id',
    component: ProductDetailComponent,
  },


  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
