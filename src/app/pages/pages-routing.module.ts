import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {
    path: 'users',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./users/users.module')
          .then(m => m.UsersModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
