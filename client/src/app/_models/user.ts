export interface User {
  username: string;
  password: string;
}

export interface CurrentUser {
  id?: number;
  username: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  email?: string;
}
