import { Routes } from '@angular/router';
import { LazyLoadingComponentsLayoutComponent } from './heavy-components/layout.component';
import { DeferredViewLayoutComponent } from './deferred-view/layout.component';
import { NgOptimzedImageLayoutComponent } from './ng-optimzed-image/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lazy-loading',
    pathMatch: 'prefix',
  },
  {
    path: 'lazy-loading',
    component: LazyLoadingComponentsLayoutComponent,
    children: [
      {
        path: 'heavy1',
        loadComponent: () =>
          import('./heavy-components/heavy-1.component').then(
            (m) => m.Heavy1Component
          ),
      },
      {
        path: 'heavy2',
        loadComponent: () =>
          import('./heavy-components/heavy-2.component').then(
            (m) => m.Heavy2Component
          ),
      },
      {
        path: 'heavy3',
        loadComponent: () =>
          import('./heavy-components/heavy-3.component').then(
            (m) => m.Heavy3Component
          ),
      },
      {
        path: 'heavy4',
        loadComponent: () =>
          import('./heavy-components/heavy-4.component').then(
            (m) => m.Heavy4Component
          ),
      },
      {
        path: 'heavy5',
        loadComponent: () =>
          import('./heavy-components/heavy-5.component').then(
            (m) => m.Heavy5Component
          ),
      },
      {
        path: 'heavy6',
        loadComponent: () =>
          import('./heavy-components/heavy-6.component').then(
            (m) => m.Heavy6Component
          ),
      },
      {
        path: 'heavy7',
        loadComponent: () =>
          import('./heavy-components/heavy-7.component').then(
            (m) => m.Heavy7Component
          ),
      },
      {
        path: 'heavy8',
        loadComponent: () =>
          import('./heavy-components/heavy-8.component').then(
            (m) => m.Heavy8Component
          ),
      },
      {
        path: 'heavy9',
        loadComponent: () =>
          import('./heavy-components/heavy-9.component').then(
            (m) => m.Heavy9Component
          ),
      },
      {
        path: 'heavy10',
        loadComponent: () =>
          import('./heavy-components/heavy-10.component').then(
            (m) => m.Heavy10Component
          ),
      },
    ],
  },
  {
    path: 'deferred-views',
    component: DeferredViewLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./deferred-view/deferred.component').then(
            (m) => m.DeferredViewComponent
          ),
      },
      {
        path: 'with-placeholder',
        loadComponent: () =>
          import('./deferred-view/with-placeholder.component').then(
            (m) => m.WithPlaceholderViewComponent
          ),
      },
      {
        path: 'using-loading',
        loadComponent: () =>
          import('./deferred-view/using-loading.component').then(
            (m) => m.UsingLoadingComponent
          ),
      },
      {
        path: 'on-interaction',
        loadComponent: () =>
          import('./deferred-view/on-interaction.component').then(
            (m) => m.OnInteractionComponent
          ),
      },
    ],
  },
  {
    path: 'ng-optimized-image',
    component: NgOptimzedImageLayoutComponent,
    children: [
      {
        path: 'priority',
        loadComponent: () =>
          import('./ng-optimzed-image/priority/layout.component').then(
            (m) => m.PriorityLayoutComponent
          ),
        children: [
          {
            path: 'image-no-priority',
            loadComponent: () =>
              import(
                './ng-optimzed-image/priority/image-no-priority.component'
              ).then((m) => m.ImageWithNoPriorityComponent),
          },
          {
            path: 'image-with-priority',
            loadComponent: () =>
              import(
                './ng-optimzed-image/priority/image-with-priority.component'
              ).then((m) => m.ImageWithPriorityComponent),
          },
          {
            path: 'ng-img-with-priority',
            loadComponent: () =>
              import(
                './ng-optimzed-image/priority/ng-img-with-priority.component'
              ).then((m) => m.NgImgWithPriorityComponent),
          },
          {
            path: 'lcp-ng-img-wo-priority',
            loadComponent: () =>
              import(
                './ng-optimzed-image/priority/lcp-ng-img-wo-priority.component'
              ).then((m) => m.LcpNgImgWOPriorityComponent),
          },
        ],
      },
      {
        path: 'placeholder',
        loadComponent: () =>
          import('./ng-optimzed-image/placeholder/layout.component').then(
            (m) => m.PlaceholderLayoutComponent
          ),
        children: [
          {
            path: 'low-resolution-placeholder',
            loadComponent: () =>
              import(
                './ng-optimzed-image/placeholder/low-resolution-placeholder.component'
              ).then((m) => m.LowResolutionPlaceholderComponent),
          },
          {
            path: 'low-resolution-base64-placeholder',
            loadComponent: () =>
              import(
                './ng-optimzed-image/placeholder/low-resolution-base64-placeholder.component'
              ).then((m) => m.LowResolutionBase64PlaceholderComponent),
          },
          {
            path: 'low-resolution-base64-placeholder-with-config',
            loadComponent: () =>
              import(
                './ng-optimzed-image/placeholder/low-resolution-base64-placeholder-config.component'
              ).then((m) => m.LowResolutionBase64PlaceholderConfigComponent),
          },
        ],
      },
      {
        path: 'responsive',
        loadComponent: () =>
          import('./ng-optimzed-image/responsive/layout.component').then(
            (m) => m.ResponsiveLayoutComponent
          ),
        children: [
          {
            path: 'out-of-box',
            loadComponent: () =>
              import(
                './ng-optimzed-image/responsive/out-of-box.component'
              ).then((m) => m.OutOfBoxComponent),
          },
          {
            path: 'with-80vw',
            loadComponent: () =>
              import(
                './ng-optimzed-image/responsive/with-fixed-size.component'
              ).then((m) => m.With80vwComponent),
          },
          {
            path: 'custom-src-set',
            loadComponent: () =>
              import(
                './ng-optimzed-image/responsive/custom-src-set.component'
              ).then((m) => m.CustomSrcSetComponent),
          },
          {
            path: 'two-cols',
            loadComponent: () =>
              import('./ng-optimzed-image/responsive/two-cols.component').then(
                (m) => m.TwoColsComponent
              ),
          },
        ],
      },
    ],
  },
];
