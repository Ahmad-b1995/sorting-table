import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaNumPipe } from './fa-num.pipe';


@NgModule({
  declarations: [FaNumPipe],
  imports: [
    CommonModule
  ],
  exports:[
    FaNumPipe
  ]
})
export class FaNumModule { }
