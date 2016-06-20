import { Component, OnInit } from '@angular/core';
import { Image } from './image';
import { ImageDetailComponent } from './image-detail.component';
import { ImageService } from './image.service';

@Component({
  selector: 'images',
  directives: [ImageDetailComponent],
  template:`
    <h1>{{title}}</h1>
    <ul class="images">
      <li *ngFor="let image of images" (click)="onSelect(image)" [class.selected]="image === selectedImage">
        <span class="badge">{{image.id}}</span> {{image.alias}}
      </li>
    </ul>
    <image-detail [image]="selectedImage"></image-detail>
  `,
})

export class ImagesComponent implements OnInit {
  title = 'LXD Web UI';
  images: Image[];
  selectedImage: Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  onSelect(image: Image) {
    this.selectedImage = image;
  }

  getImages() {
    this.imageService.getImages().then(images => this.images = images);
  }
}
