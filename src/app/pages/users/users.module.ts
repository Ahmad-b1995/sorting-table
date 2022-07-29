import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UsersRoutingModule } from './users.routing.module';
import { TableModule } from 'src/app/components/table/table.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
  declarations: [
    UserListComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    RouterModule
  ]
})
export class UsersModule { }
