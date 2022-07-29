import { User } from './user';

export interface UserList {
  [key: string]: number | User[];
  "page": number,
  "per_page": number,
  "total": number,
  "total_pages": number,
  "data": User[]
}
