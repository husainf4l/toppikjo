import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, computed, effect } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NavigationLink } from '../../services/models/general.model';
import { CartService } from '../../services/cart.service';
import { v4 as uuidv4 } from 'uuid';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/models/interfaces.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {
    effect(() => {
      console.log('Cart updated:', this.totalQuantity());
    });
  }
  isMenuOpen = false;
  products: Product[] = [];






  totalQuantity = computed(() => this.cartService.cartCount());

  navigationLinks: NavigationLink[] = [
    { id: 0, name: 'الرئيسية', routerLink: '/', lang: 'ar' },
    { id: 4, name: 'تسوق الان', routerLink: '/shop-all', lang: 'ar' },
    { id: 1, name: 'نقاط البيع المعتمدة', routerLink: '/authorized', lang: 'ar' },
    { id: 2, name: 'تواصل معنا', routerLink: '/', lang: 'ar' },

  ];

  mainLogo: string = 'assets/toppik-logo.png';




  ngOnInit(): void {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem('sessionId', sessionId);
    }
  }


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
