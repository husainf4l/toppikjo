import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule,CommonModule],  // Import necessary modules here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = null;
  cartId: string = ''; // Retrieve or create the cart ID dynamically

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initializeCart();
  }

  initializeCart() {
    // Create or retrieve cart here
    this.cartService.createCart().subscribe((data) => {
      this.cartId = data.id;
      this.loadCart();
    });
  }

  loadCart() {
    this.cartService.getCart(this.cartId).subscribe((data) => {
      this.cart = data;
    });
  }

  addToCart(productId: string, quantity: number) {
    this.cartService.addItemToCart(this.cartId, productId, quantity).subscribe(() => {
      this.loadCart();
    });
  }

  removeFromCart(itemId: string) {
    this.cartService.removeItemFromCart(itemId).subscribe(() => {
      this.loadCart();
    });
  }
}
