import { Injectable } from '@angular/core';
import { Image } from './image';
import { IMAGES } from './mock-images';

@Injectable()
export class ImageService {
  getImages() {
    return new Promise<Image[]>(resolve =>
      setTimeout(() => resolve(IMAGES), 2000)
    );
  }
}
