import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'deferred-view',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    <div style="height: 500px; background: yellow; ">Some other component</div>
    @defer () {
    <app-images></app-images>
    }
  `,
})
export class DeferredViewComponent {}
