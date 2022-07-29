import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isPending: boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events
      .subscribe(
        event => {
          if (event instanceof NavigationStart
            || event instanceof RouteConfigLoadStart) {
            this.isPending = true;
          }
          else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel ||
            event instanceof RouteConfigLoadEnd) {
            this.isPending = false;
          }
        }
      );
  }
}
