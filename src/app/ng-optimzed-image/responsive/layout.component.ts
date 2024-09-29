import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'responsive-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <p>
      <a routerLink="out-of-box" routerLinkActive="selected-secondary"
        >Out of box support</a
      >
      |
      <a routerLink="with-80vw" routerLinkActive="selected-secondary"
        >With 80vw</a
      >
      |
      <a routerLink="custom-src-set" routerLinkActive="selected-secondary"
        >Custom Src Set (100w, 200w, 300w)</a
      >
      |
      <a routerLink="two-cols" routerLinkActive="selected-secondary"
        >Media Queries</a
      >
    </p>

    <router-outlet> </router-outlet>
  `,
})
export class ResponsiveLayoutComponent {}
