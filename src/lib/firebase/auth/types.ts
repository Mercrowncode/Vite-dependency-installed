export interface AuthError {
  code: string;
  message: string;
}

export interface AuthResponse<T = void> {
  data?: T;
  error?: AuthError;
}

export interface SignUpData {
  name: string;
  email: string;
  phone?: string;
}