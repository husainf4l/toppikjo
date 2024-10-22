import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { of } from 'rxjs';
import { environment } from '../enviroments/enviroment';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}`; // Update with your backend URL

  constructor(private http: HttpClient, private router: Router, private cartService: CartService) { }

  createOrder(cartId: string, address: string, mobile: string, userName?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/order/${cartId}`, { address, mobile, userName }).pipe(
      switchMap(order => {
        // Delete the cart from the server
        return this.cartService.deleteCart(cartId).pipe(
          // After deleting the cart from the server, remove it from local storage
          switchMap(() => {
            localStorage.removeItem('cartId');
            return of(order);  // Wrap the order in an Observable
          })
        );
      })
    );
  }

  confirmOrder(orderId: string, totalPrice: number): void {
    // Logic to confirm the order (e.g., save to the backend)

    // Navigate to the order details page
    this.router.navigate(['/order-details', orderId]);
  }

  getOrderById(orderId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/order/${orderId}`);
  }

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/order`);
  }

}
