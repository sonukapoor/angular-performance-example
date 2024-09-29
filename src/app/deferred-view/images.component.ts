import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  template: `<div style="display: flex; flex-direction: column; gap:10px">
    @for(image of list; track image) {
    <img [src]="image" width="600" height="400" />
    }
  </div> `,
})
export class ImagesComponent {
  list = Array(5).fill('https://placehold.co/600x400');
}
