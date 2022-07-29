import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaNumModule } from 'src/app/pipes/fa-num/fa-num-pipe.module';
import { RoundPipe } from './../../pipes/round-pipe/round.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TableComponent,
    PaginationComponent,
    RoundPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaNumModule,
    RouterModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
