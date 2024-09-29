import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'deferred-view-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <p>
      <a routerLink="." routerLinkActive="selected-secondary">
        <span>Deferred View</span>
      </a>
      |
      <a routerLink="with-placeholder" routerLinkActive="selected-secondary">
        <span>With Placeholder</span>
      </a>
      |
      <a routerLink="using-loading" routerLinkActive="selected-secondary">
        <span>Using Loading</span>
      </a>
      |
      <a routerLink="on-interaction" routerLinkActive="selected-secondary">
        <span>On Interaction</span>
      </a>
    </p>

    <router-outlet> </router-outlet>
  `,
})
export class DeferredViewLayoutComponent {}
