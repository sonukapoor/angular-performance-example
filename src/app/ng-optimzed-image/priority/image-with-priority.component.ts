import { Component } from '@angular/core';

@Component({
  selector: 'image-with-priority',
  standalone: true,
  template: `<h2>Normal image with Priority</h2>
    <div class="d-flex">
      <div>
        <img
          src="/assets/angular.webp"
          width="200"
          height="200"
          fetchpriority="high"
        />
      </div>
      <pre class="code">
  &lt;img 
    src="/assets/angular.webp" 
    width="200" 
    height="200"
    fetchpriority="high"
    />
      </pre
      >
    </div> `,
})
export class ImageWithPriorityComponent {}
