import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Image} from './image';

@Injectable()
export class ImageService {

  constructor(
    private http: Http) {
  }

  getImages(): Promise<Image[]> {
    return this.http.get('https://images.linuxcontainers.org/1.0/images/aliases')
      .toPromise()
      .then(response => response.json().metadata)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getImage(id: number) {
    return this.getImages().then(images => images.filter(image => image.id === id)[0]);
  }
}
