import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'with-placeholder',
  standalone: true,
  imports: [ImagesComponent],
  template: `@defer () {
    <app-images></app-images>
    } @placeholder (minimum 5000ms) {
    <p>Loading Images</p>
    } `,
})
export class WithPlaceholderViewComponent {}
