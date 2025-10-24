import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'with-placeholder',
  standalone: true,
  imports: [ImagesComponent],
  template: `@defer () {
    <app-images></app-images>
    } @placeholder (minimum 2000ms) {
    <p>Loading Images after 2 seconds</p>
    } `,
})
export class WithPlaceholderViewComponent {}
