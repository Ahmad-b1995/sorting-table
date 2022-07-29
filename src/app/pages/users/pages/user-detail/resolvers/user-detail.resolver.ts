import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDetailService } from '../services/user-detail.service';
import { User } from '../../../../../models/user';
import { Support } from '../../../../../models/support';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolver implements Resolve<{ [key: string]: User | Support }> {

  constructor(
    private userDetailService: UserDetailService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<{ [key: string]: User | Support }> {
    const userId = parseInt(route.paramMap.get('id')!)
    return this.userDetailService.getUser(userId)
  }
}
