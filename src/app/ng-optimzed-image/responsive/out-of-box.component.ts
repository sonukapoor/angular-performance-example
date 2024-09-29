import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'out-of-box-responsiveness',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h2>Out of box responsiveness</h2>
    <div class="d-flex">
      <div>
        <img [ngSrc]="'angular.jpg'" width="200" height="200" priority="true" />
      </div>
      <pre class="code">
  &lt;img 
    [ngSrc]="'angular.jpg'" 
    width="200" 
    height="200" 
    priority="true"
    />
      </pre
      >
    </div>
  `,
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dnj0y4eck')],
})
export class OutOfBoxComponent {}
