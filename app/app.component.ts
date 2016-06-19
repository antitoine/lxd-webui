import { Component } from '@angular/core';
import { Image } from './image';
import { ImageDetailComponent } from './image-detail.component';

const IMAGES: Image[] = [
  { id: 1, alias: 'Ubuntu 16.04' },
  { id: 2, alias: 'Ubuntu 15.10' },
  { id: 3, alias: 'Ubuntu 15.04' },
  { id: 4, alias: 'Ubuntu 14.10' },
  { id: 5, alias: 'Ubuntu 14.04' },
  { id: 6, alias: 'Ubuntu 13.10' },
  { id: 7, alias: 'Ubuntu 13.04' },
  { id: 8, alias: 'Ubuntu 12.10' },
  { id: 9, alias: 'Ubuntu 12.04' },
];

@Component({
  selector: 'my-app',
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
export class AppComponent {
  title = 'LXD Web UI';
  images = IMAGES;
  selectedImage: Image;
  onSelect(image: Image) { this.selectedImage = image; }
}
