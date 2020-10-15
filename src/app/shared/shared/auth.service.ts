import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = new Subject<boolean>();
  isAuthenticated$ = this._isAuthenticated.asObservable();

  private isloggedIn: boolean;
  private userName: string;

  constructor() {
    this._isAuthenticated.next(false);
  }

  login(username: string, password: string) {
    this.isloggedIn = true;
    this.userName = username;
    return of(this.isloggedIn);
  }

  logoutUser(): void {
    this._isAuthenticated.next(false);
  }
}
