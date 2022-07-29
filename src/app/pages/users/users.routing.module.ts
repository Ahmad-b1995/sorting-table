import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersComponent } from './users.component';
import { UserDetailResolver } from './pages/user-detail/resolvers/user-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
        data: { animation: 'isRight'} ,
      },
      {
        path: ':id',
        component: UserDetailComponent,
        data: { animation: 'isLeft'} ,
        resolve: {
          user: UserDetailResolver
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [UserDetailResolver]
})

export class UsersRoutingModule {
}

