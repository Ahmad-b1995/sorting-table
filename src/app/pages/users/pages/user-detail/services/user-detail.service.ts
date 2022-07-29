import { Injectable } from '@angular/core';
import { User } from '../../../../../models/user';
import { HttpClient } from '@angular/common/http';
import { Support } from '../../../../../models/support';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private httpClient: HttpClient) { }

  getUser(id: number) {
    return this.httpClient.get<{ [key: string]: User | Support }>(`https://reqres.in/api/users/${id}`)
  }
}
