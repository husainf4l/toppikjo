import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [],
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
})
export class ProductHomeComponent {
  products: any;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    return this.productService
      .getProducts()
      .subscribe((data: any) => (this.products = data));
  }
}
