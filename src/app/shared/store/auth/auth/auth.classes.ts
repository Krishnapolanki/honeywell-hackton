export interface AuthInfo {
  id: number;
  username: string;
  password: string;
  loggedIn: boolean;
}

export const initialAuthState: AuthInfo = {
  id: null,
  username: null,
  password: null,
  loggedIn: false,
};

export interface AuthState {
  id: number;
  username: string;
  password: string;
  loggedIn: boolean;
}
