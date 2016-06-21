import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ImageService} from './image.service';
import {ImagesComponent} from './images.component';
import {DashboardComponent} from './dashboard.component';
import {ImageDetailComponent} from "./image-detail.component";

@RouteConfig([
  {
    path: '/images',
    name: 'Images',
    component: ImagesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/image/detail/:id',
    name: 'ImageDetail',
    component: ImageDetailComponent
  },
])

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ImageService
  ]
})
export class AppComponent {
  title = 'Tour of LXD Images';
}
