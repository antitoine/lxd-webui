import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Image} from './image';
import {ImageService} from './image.service';

@Component({
  selector: 'images',
  templateUrl: 'app/images.component.html',
})

export class ImagesComponent implements OnInit {
  title = 'LXD Web UI';
  images: Image[];
  selectedImage: Image;

  constructor(
    private imageService: ImageService,
    private router: Router) {
  }

  ngOnInit() {
    this.getImages();
  }

  onSelect(image: Image) {
    this.selectedImage = image;
  }

  getImages() {
    this.imageService.getImages().then(images => this.images = images);
  }

  gotoDetail() {
    this.router.navigate(['ImageDetail', { id: this.selectedImage.id }]);
  }
}
