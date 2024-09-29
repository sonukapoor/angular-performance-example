import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'priority-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <p>
      <a routerLink="priority" routerLinkActive="selected">Priority</a> |
      <a routerLink="placeholder" routerLinkActive="selected">Placeholder</a>
      |
      <a routerLink="responsive" routerLinkActive="selected">Responsive</a>
    </p>
    <router-outlet></router-outlet>
  `,
})
export class NgOptimzedImageLayoutComponent {}
