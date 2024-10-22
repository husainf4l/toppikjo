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

  getAuthorizedPointsOfSale(page: number, limit: number, search: string = ''): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}&search=${search}`);
  }


}
