import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBagsComponent } from './product-bags/product-bags.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
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
    path: 'bags/1',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
