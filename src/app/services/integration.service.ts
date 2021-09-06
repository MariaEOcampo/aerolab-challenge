import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntegrationService {
  private userPoints$ = new BehaviorSubject<number>(0);
  constructor() {}

  getUserPoints$() {
    return this.userPoints$.asObservable();
  }

  emitUserPoints$(points: number) {
    this.userPoints$.next(points);
  }
}
