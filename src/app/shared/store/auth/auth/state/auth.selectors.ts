import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../auth.classes';
export const authStateName = 'auth';
export const getAuthState = createFeatureSelector<AuthState>(authStateName);
export const getLoggedIn = createSelector(
  getAuthState,
  (authState: AuthState) => authState.loggedIn
);
export const getCurrentUserId = createSelector(
  getAuthState,
  (state) => state.username
);
