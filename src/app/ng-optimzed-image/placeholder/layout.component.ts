import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'placeholder-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <p>
      <a
        routerLink="low-resolution-base64-placeholder"
        routerLinkActive="selected-secondary"
        >Placeholder with Base 64 image</a
      >
      |
      <a
        routerLink="low-resolution-base64-placeholder-with-config"
        routerLinkActive="selected-secondary"
        >Placeholder with config</a
      >
    </p>

    <router-outlet> </router-outlet>
  `,
})
export class PlaceholderLayoutComponent {}
