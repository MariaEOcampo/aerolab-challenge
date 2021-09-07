import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { header } from './config/config.api';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `${this.baseUrl}${query}`;
    const headers = header;
    return this.http.get(url, { headers });
  }

  postQuery(query: string, body: any) {
    const url = `${this.baseUrl}${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMxOWVlNWE5MDUzOTAwMjFiNzBiMjIiLCJpYXQiOjE2MzA2NDE4OTR9.axNieH2FmX1CVjccsGZTecOnfAR7oy2-5nYmy1qjmWw',
    });
    return this.http.post(url, body, { headers });
  }

  getProducts(): Observable<Product[]> {
    return this.getQuery('/products').pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  postProducts(id: any): Observable<any> {
    return this.postQuery('/redeem', id).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((e) => {
        return e;
      })
    );
  }

  getHistoryProducts(): Observable<any> {
    return this.getQuery('/user/history').pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
