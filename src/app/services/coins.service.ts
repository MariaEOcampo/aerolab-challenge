import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  postQuery(query: string, body: any) {
    const url = `${this.baseUrl}${query}`;
    return this.http.post(url, body);
  }

  postPoints(value: any): Observable<any> {
    return this.postQuery('/user/points', value).pipe(
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
