import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-img-with-priority',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h2>ngSrc with Priority</h2>
    <div class="d-flex">
      <div>
        <img
          [ngSrc]="'/assets/angular.webp'"
          width="200"
          height="200"
          priority
        />
      </div>
      <pre class="code">
  &lt;img 
    [ngSrc]="'/assets/angular.webp'" 
    width="200" 
    height="200"
    priority
    />
      </pre
      >
    </div>
    <h2>ngSrc without Priority</h2>
    <div class="d-flex">
      <div>
        <img [ngSrc]="'/assets/angular2.png'" width="200" height="200" />
      </div>
      <pre class="code">
  &lt;img 
    [ngSrc]="'/assets/angular2.png'" 
    width="200" 
    height="200"
    />
      </pre
      >
    </div>
  `,
})
export class NgImgWithPriorityComponent {}
