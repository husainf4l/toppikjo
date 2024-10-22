import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedPosService {

  private apiUrl = `${environment.apiUrl}/authorized-pos`;


  constructor(private http: HttpClient) { }


  getAuthorizedAllPointsOfSale(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getAuthorizedPointsOfSale(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getAuthorizedPointOfSaleById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  createAuthorizedPointOfSale(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  deleteAuthorizedPointOfSale(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateAuthorizedPointOfSale(id: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}`, data);
  }
}
