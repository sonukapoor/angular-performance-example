import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lcp-ng-img-wo-priority',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h2>ngSrc without Priority and an Image provider</h2>
    <div class="d-flex">
      <div>
        <img [ngSrc]="'/assets/angular.webp'" width="200" height="200" />
      </div>
      <pre class="code">
  &lt;img 
    [ngSrc]="'angular.jpg'" 
    width="200" 
    height="200"
    />
      </pre
      >
    </div>
    <p class="error">
      NG02955: The NgOptimizedImage directive (activated on an <img /> element
      with the 'ngSrc="http://localhost:60128/assets/angular.webp") has detected
      that this image is the Largest Contentful Paint (LCP) element but was not
      marked "priority". This image should be marked "priority" in order to
      prioritize its loading. To fix this, add the "priority" attribute.
    </p>
  `,
})
export class LcpNgImgWOPriorityComponent {}
