import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'on-interaction',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    <h2>On Interaction or after 5 seconds</h2>
    @defer (on interaction; on timer(5s)) {
    <app-images></app-images>
    } @placeholder {
    <p>Loading Images</p>
    }
  `,
})
export class OnInteractionComponent {}
