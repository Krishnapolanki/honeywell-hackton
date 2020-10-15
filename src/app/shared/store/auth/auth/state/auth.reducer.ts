import { AuthState, initialAuthState } from '../auth.classes';
import * as AuthActions from './auth.action';

export function authReducer(
  state = initialAuthState,
  action: AuthActions.All
): AuthState {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case AuthActions.LOGOUT: {
      return initialAuthState;
    }
    default: {
      return state;
    }
  }
}
