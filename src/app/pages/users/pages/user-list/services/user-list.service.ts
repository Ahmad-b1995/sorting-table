import { UserList } from './../../../../../models/user-list';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<UserList>('https://reqres.in/api/users')
  }
}
