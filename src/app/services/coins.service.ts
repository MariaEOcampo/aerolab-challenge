import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

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

  postPoints(value: any): Observable<any> {
    return this.postQuery('/user/points', value).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((e) => {
        return e;
      })
    );
  }
}
