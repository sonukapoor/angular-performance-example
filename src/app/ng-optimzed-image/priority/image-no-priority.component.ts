import { Component } from '@angular/core';

@Component({
  selector: 'image-no-priority',
  standalone: true,
  template: `
    <h2>Normal image with no Priority</h2>
    <div class="d-flex">
      <div>
        <img src="/assets/angular.webp" width="200" height="200" />
      </div>
      <pre class="code">
  &lt;img 
    src="/assets/angular.webp" 
    width="200" 
    height="200" 
    />
      </pre
      >
    </div>
  `,
})
export class ImageWithNoPriorityComponent {}
