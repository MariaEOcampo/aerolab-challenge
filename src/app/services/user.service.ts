import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { header } from './config/config.api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `${this.baseUrl}${query}`;
    const headers = header;
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
