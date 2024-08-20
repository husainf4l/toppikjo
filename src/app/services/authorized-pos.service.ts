import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedPosService {
  private apiUrl = 'http://149.200.251.14:3000/authorized-pos';

  constructor(private http: HttpClient) { }

  getAuthorizedPointsOfSale(page: number, limit: number, search: string = ''): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}&search=${search}`);
  }


}
