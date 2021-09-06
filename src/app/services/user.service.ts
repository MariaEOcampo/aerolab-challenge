import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `${this.baseUrl}${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMxOWVlNWE5MDUzOTAwMjFiNzBiMjIiLCJpYXQiOjE2MzA2NDE4OTR9.axNieH2FmX1CVjccsGZTecOnfAR7oy2-5nYmy1qjmWw',
    });
    return this.http.get(url, { headers });
  }

  getUser(): Observable<User> {
    return this.getQuery('/user/me').pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
