import { Component, OnInit } from '@angular/core';
import { UserListService } from './services/user-list.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users?: User[]

  constructor(
    private userListService: UserListService) { }

  ngOnInit(): void {
    this.userListService.getUsers().subscribe(res => {
      this.users = res.data
    })
  }

}
