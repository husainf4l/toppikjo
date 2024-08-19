import { Routes } from '@angular/router';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { ShippingAddressComponent } from './pages/shipping-address/shipping-address.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

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
  { path: 'order-confirmation', component: OrderComponent },

  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'shipping-address', component: ShippingAddressComponent },
  { path: 'admin/orders', component: OrderListComponent },

];
