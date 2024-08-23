import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedPosService {
  private apiURL = 'http://149.200.251.14:3000/authorized-pos';

  constructor(private http: HttpClient) { }


  getAuthorizedAllPointsOfSale(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/all`);
  }

  getAuthorizedPointsOfSale(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  getAuthorizedPointOfSaleById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }


  createAuthorizedPointOfSale(data: any): Observable<any> {
    return this.http.post<any>(this.apiURL, data);
  }

  deleteAuthorizedPointOfSale(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  updateAuthorizedPointOfSale(id: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/${id}`, data);
  }
}
