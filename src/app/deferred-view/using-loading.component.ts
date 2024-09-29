import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'using-loading',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    @defer () {
    <app-images></app-images>
    } @loading (after 1s; minimum 500ms) {
    <p>Loading Images</p>
    }
  `,
})
export class UsingLoadingComponent {}
