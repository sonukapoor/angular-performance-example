import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'using-loading',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    @defer () {
    <app-images></app-images>
    } @loading (after 15s; minimum 10s) {
    <p>Loading Images after 15 seconds with min 10s</p>
    }
  `,
})
export class UsingLoadingComponent {}
