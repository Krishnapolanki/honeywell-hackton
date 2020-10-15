import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AuthInfo } from './auth.classes';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<AuthInfo> {
    var authInfo: AuthInfo = {
      id: 1,
      username: username,
      password: password,
      loggedIn: true,
    };
    return of(authInfo);
  }

  logoutUser(): void {}
}
