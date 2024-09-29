import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes-lazy-loading';
// import { routes } from './app.routes-eager-loading';
// import { routes } from './other.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
