import { map, switchMap, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from './auth.action';
import { AuthService } from '../auth.service';
import { AuthInfo } from '../auth.classes';
@Injectable()
export class AuthEffects {
  @Effect()
  login: Observable<Action> = this.actions.pipe(
    ofType(AuthActions.LOGIN),
    switchMap((action: AuthActions.Login) => {
      return this.authService
        .login(action.payload.userName, action.payload.password)
        .pipe(
          take(1),
          map((authInfo: AuthInfo) => {
            if (authInfo.loggedIn) {
              return new AuthActions.LoginSuccess(authInfo);
            } else {
              return new AuthActions.LoginFailure();
            }
          })
        );
    })
  );

  constructor(private actions: Actions, private authService: AuthService) {}
}
