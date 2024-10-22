import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  getProducts2(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/product`);
  }

  getProducts() {
    return this.http.get(this.apiURL + '/product');
  }
  getFeaturedProducts() {
    return this.http.get(this.apiURL + '/product/featured');
  }
  getProductsBySubCategory(id: any) {
    return this.http.get(this.apiURL + '/product/category/' + id)
  }
  getProductDetailById(id: any) {
    return this.http.get(this.apiURL + '/product/' + id)
  }
  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiURL}/product`, product);
  }
  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.apiURL}/product/${productId}`);
  }

  updateProduct(productId: string, productData: any): Observable<any> {
    return this.http.patch(`${this.apiURL}/product/${productId}`, productData);
  }


}
