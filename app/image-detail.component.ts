import {Component, Input, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Image} from './image';
import {ImageService} from './image.service';

@Component({
  selector: 'image-detail',
  templateUrl: 'app/image-detail.component.html',
})

export class ImageDetailComponent implements OnInit {
  @Input() image: Image;

  constructor(
    private imageService: ImageService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.imageService.getImage(id).then(image => this.image = image);
  }

  goBack() {
    window.history.back();
  }
}
