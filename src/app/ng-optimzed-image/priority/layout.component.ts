import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'priority-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <p>
      <a routerLink="image-no-priority" routerLinkActive="selected-secondary"
        >Image with no priority</a
      >
      |
      <a routerLink="image-with-priority" routerLinkActive="selected-secondary"
        >Image with priority</a
      >
      |
      <a routerLink="ng-img-with-priority" routerLinkActive="selected-secondary"
        >Ng Img with priority</a
      >
      |
      <a
        routerLink="lcp-ng-img-wo-priority"
        routerLinkActive="selected-secondary"
        >LCP Warning Ng Img without priority</a
      >
    </p>

    <router-outlet> </router-outlet>
  `,
})
export class PriorityLayoutComponent {}
