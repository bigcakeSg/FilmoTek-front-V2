export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  avatar: string;
  role: 'user' | 'admin';
}

export interface Me extends User {
  exp: number;
  iat: number;
}
