import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-src-with-placeholder',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h2>ngSrc with a Placeholder</h2>
    <div class="d-flex">
      <div>
        <img
          [ngSrc]="'angular.jpg'"
          width="200"
          height="200"
          priority="true"
          placeholder
        />
      </div>
      <pre class="code">
  &lt;img 
    [ngSrc]="'angular.jpg'"
    width="200"
    height="200"
    priority="true"
    placeholder
    />
      </pre
      >
    </div>
  `,
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dnj0y4eck')],
})
export class LowResolutionPlaceholderComponent {}
