import { Routes } from '@angular/router';

import { AuthorizedComponent } from './pages/authorized/authorized.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductListBrandComponent } from './components/product-list-brand/product-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'authorized', component: AuthorizedComponent, },
  {
    path: 'shop/product/:handle',
    component: ProductDetailsComponent,
    data: {
      title: 'تفاصيل المنتج - توبيك',
      description: 'تعرف على معلومات تفصيلية حول هذا المنتج التجميلي الفاخر.',
      keywords: ['توبيك', 'تفاصيل المنتج', 'منتجات تجميل', 'منتجات فاخرة', 'عناية شخصية'],
    },
  },
  {
    path: 'shop-all',
    component: ProductListBrandComponent,
    data: {
      title: 'التصنيفات - توبيك',
      description: 'تصفح منتجات توبيك حسب التصنيف للعثور على الحل المثالي لجمالك.',
      keywords: ['توبيك', 'تصنيفات المنتجات', 'جمال', 'عناية بالبشرة', 'تسوق'],
    },
  },
 
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'تسجيل الدخول - توبيك',
      description: 'قم بتسجيل الدخول إلى حسابك في توبيك وابدأ التسوق للحصول على منتجات التجميل الفاخرة.',
      keywords: ['توبيك', 'تسجيل الدخول', 'منتجات تجميل', 'تسوق أونلاين', 'حساب توبيك'],
    },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'إنشاء حساب - توبيك',
      description: 'أنشئ حسابًا جديدًا في توبيك واستكشف أحدث عروض التجميل.',
      keywords: ['توبيك', 'إنشاء حساب', 'منتجات تجميل', 'عروض الجمال', 'حساب جديد'],
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'عربة التسوق - توبيك',
      description: 'راجع المنتجات التي اخترتها في عربة التسوق قبل إتمام عملية الشراء.',
      keywords: ['توبيك', 'عربة التسوق', 'منتجات تجميل', 'إتمام الشراء', 'تسوق أونلاين'],
    },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: {
      title: 'الدفع - توبيك',
      description: 'أكمل عملية الشراء بأمان على توبيك.',
      keywords: ['توبيك', 'الدفع', 'عملية الشراء', 'منتجات فاخرة', 'عناية بالبشرة'],
    },
  },
  {
    path: 'order-confirmation/:orderId',
    component: OrderConfirmationComponent,
    data: {
      title: 'تأكيد الطلب - توبيك',
      description: 'شكرًا لك على طلبك! تم تأكيد عملية الشراء بنجاح.',
      keywords: ['توبيك', 'تأكيد الطلب', 'شراء ناجح', 'منتجات تجميل', 'عناية شخصية'],
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '404 - الصفحة غير موجودة',
      description: 'عذرًا! الصفحة التي تبحث عنها غير موجودة.',
      keywords: ['توبيك', '404', 'الصفحة غير موجودة', 'خطأ', 'تسوق'],
    },
  },


];
