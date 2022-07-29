import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user?: User

  constructor(private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.activateroute.snapshot.data['user'].data
  }

}
