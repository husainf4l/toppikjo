import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://149.200.251.14:3000'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  createOrder(cartId: string, address: string, mobile: string, userId?: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/order/${cartId}`, { address, mobile, userId });
  }

  getOrder(orderId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/order/${orderId}`);
  }
}
