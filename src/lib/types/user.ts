export interface UserRole {
  admin: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  roles?: UserRole;
}