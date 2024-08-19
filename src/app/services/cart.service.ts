import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://149.200.251.14:3000';
  private cartItemCount = signal(0);

  constructor(private http: HttpClient) { }

  updateCartItemCount(count: number) {
    this.cartItemCount.set(count);
  }
  get cartItemCount$(): Signal<number> {
    return this.cartItemCount;
  }

  createCart(): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart`, {});
  }

  addItemToCart(cartId: string, productId: string, quantity: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart/${cartId}/items`, { productId, quantity });
  }

  getCart(cartId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cart/${cartId}`);
  }

  removeItemFromCart(itemId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cart/items/${itemId}`);
  }
}
