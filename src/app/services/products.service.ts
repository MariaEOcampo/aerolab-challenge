import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `${this.baseUrl}${query}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMxOWVlNWE5MDUzOTAwMjFiNzBiMjIiLCJpYXQiOjE2MzA2NDE4OTR9.axNieH2FmX1CVjccsGZTecOnfAR7oy2-5nYmy1qjmWw',
    });
    return this.http.get(url, { headers });
  }

  getProducts(): Observable<Product[]> {
    return this.getQuery('/products').pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  /*  postProduct(): Observable<Product>{
    return this.getQuery()
  } */
}
