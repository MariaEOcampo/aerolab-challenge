import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get(url);
  }

  postQuery(query: string, body: any) {
    const url = `${this.baseUrl}${query}`;
    return this.http.post(url, body).pipe(
      map(
        (data: any) => {
          return data;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }

  getProducts(): Observable<Product[]> {
    return this.getQuery('/products').pipe(
      map(
        (data: any) => {
          return data;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }

  postProducts(id: any): Observable<any> {
    return this.postQuery('/redeem', id).pipe(
      map(
        (data: any) => {
          return data;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }

  getHistoryProducts(): Observable<any> {
    return this.getQuery('/user/history').pipe(
      map(
        (data: any) => {
          return data;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }
}
