import { Action } from '@ngrx/store';
import { AuthInfo } from '../auth.classes';
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGOUT = '[Auth] Logout';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { userName: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: AuthInfo) {}
}
export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;
}
export class Logout implements Action {
  readonly type = LOGOUT;
}
export type All = Login | LoginSuccess | LoginFailure | Logout;
