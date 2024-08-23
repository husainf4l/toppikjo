import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminOrderDetailsComponent } from './order-details/order-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AuthorizedPosListComponent } from './authorized-pos-list/authorized-pos-list.component';
import { AuthorizedPosFormComponent } from './authorized-pos-form/authorized-pos-form.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'orders', component: OrderListComponent },
      { path: 'order-details/:id', component: AdminOrderDetailsComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/create', component: ProductFormComponent },
      { path: 'products/edit/:id', component: EditProductComponent },
      { path: 'authorized-pos', component: AuthorizedPosListComponent },
      { path: 'authorized-pos/create', component: AuthorizedPosFormComponent },
      { path: 'authorized-pos/edit/:id', component: AuthorizedPosFormComponent },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
