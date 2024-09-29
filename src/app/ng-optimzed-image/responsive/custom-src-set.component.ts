import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'with-fixed-size-responsiveness',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h2>With a 80vw size</h2>
    <div class="d-flex">
      <div>
        <img
          [ngSrc]="'angular.jpg'"
          width="200"
          height="200"
          priority="true"
          sizes="80vw"
          ngSrcset="100w, 200w, 300w"
        />
      </div>
      <pre class="code">
  &lt;img 
    [ngSrc]="'angular.jpg'" 
    width="200" 
    height="200" 
    priority="true"
    sizes="80vw"
    ngSrcset="100w, 200w, 300w"
    />
      </pre
      >
    </div>
  `,
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dnj0y4eck')],
})
export class CustomSrcSetComponent {}
