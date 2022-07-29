import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <div class="main-container">
    <div class="not-found">صفحه ی مورد نظر پیدا نشد!</div>
  </div>`,
  styles: [`
  .main-container{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3c4955;
    }
  .not-found{
    background-color: #a6bcd021;
    padding: 1.5rem;
    border-radius: 1rem
   }
  `]
})
export class NotFoundComponent {

}
