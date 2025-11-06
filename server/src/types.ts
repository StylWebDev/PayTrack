export interface User {
  name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  account_type: string;
}