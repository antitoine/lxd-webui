import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Image} from './image';
import {ImageService} from './image.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  images: Image[] = [];

  constructor(
    private imageService: ImageService,
    private router: Router) {

  }

  ngOnInit() {
    this.imageService.getImages().then(images => this.images = images.slice(1, 5));
  }

  gotoDetail(image: Image) {
    let link = ['ImageDetail', { id: image.id }];
    this.router.navigate(link);
  }
}
