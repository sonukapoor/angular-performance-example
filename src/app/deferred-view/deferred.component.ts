import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'deferred-view',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    @defer() {
    <app-images></app-images>
    }
  `,
})
export class DeferredViewComponent {}
