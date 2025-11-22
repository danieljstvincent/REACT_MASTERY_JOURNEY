// Basic types
export interface User {
  id: string;
  name: string;
  email: string;
}

export type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
};

export type Theme = 'light' | 'dark';
