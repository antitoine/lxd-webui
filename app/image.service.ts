import { Injectable } from '@angular/core';
import { Image } from './image';
import { IMAGES } from './mock-images';

@Injectable()
export class ImageService {

  getImages() {
    return new Promise<Image[]>(resolve =>
      setTimeout(() => resolve(IMAGES), 500)
    );
  }

  getImage(id: number) {
    return this.getImages().then(images => images.filter(image => image.id === id)[0]);
  }
}
