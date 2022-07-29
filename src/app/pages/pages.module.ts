import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [PagesComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
