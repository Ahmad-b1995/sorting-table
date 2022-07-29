import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from '../../route-animation';

@Component({
  selector: 'app-user-list',
  template: `
    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  animations: [slider]
})
export class UsersComponent {

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'])
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
