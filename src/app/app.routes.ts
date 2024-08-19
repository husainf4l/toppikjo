import { Routes } from '@angular/router';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent
  },
  {
    path: 'shop',
    component: SubCategoryComponent
  },
  {
    path: 'shop/:id',
    component: ProductDetailComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },


];
