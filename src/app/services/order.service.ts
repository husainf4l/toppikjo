import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://149.200.251.14:3000'; // Update with your backend URL

  constructor(private http: HttpClient, private router: Router) { }

  createOrder(cartId: string, address: string, mobile: string, userName?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/order/${cartId}`, { address, mobile, userName });
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
