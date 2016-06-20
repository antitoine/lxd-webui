import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ImageService }     from './image.service';
import { ImagesComponent } from './images.component';

@RouteConfig([
  {
    path: '/images',
    name: 'Images',
    component: ImagesComponent
  }
])

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Images']">LXD Images</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ImageService
  ]
})
export class AppComponent {
  title = 'Tour of LXD Images';
}
