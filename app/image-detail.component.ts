import { Component, Input } from '@angular/core';
import { Image } from './image';

@Component({
  selector: 'image-detail',
  template: `
    <div *ngIf="image">
      <h2>{{image.alias}} details!</h2>
      <div><label>id: </label>{{image.id}}</div>
      <div>
        <label>alias: </label>
        <input [(ngModel)]="image.alias" placeholder="alias"/>
      </div>
    </div>
  `,
})
export class ImageDetailComponent {
  @Input()
  image: Image;
}
