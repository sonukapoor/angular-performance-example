import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lazy-loading-components-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <p>
      @for (item of routes; track item.title) {
      <a [routerLink]="item.link" routerLinkActive="selected-secondary">
        <span>{{ item.title }}</span>
      </a>
      | }
    </p>

    <router-outlet> </router-outlet>
  `,
})
export class LazyLoadingComponentsLayoutComponent {
  routes = [
    { title: 'Component 1', link: 'heavy1' },
    { title: 'Component 2', link: 'heavy2' },
    { title: 'Component 3', link: 'heavy3' },
    { title: 'Component 4', link: 'heavy4' },
    { title: 'Component 5', link: 'heavy5' },
    { title: 'Component 6', link: 'heavy6' },
    { title: 'Component 7', link: 'heavy7' },
    { title: 'Component 8', link: 'heavy8' },
    { title: 'Component 9', link: 'heavy9' },
    { title: 'Component 10', link: 'heavy10' },
  ];
}
