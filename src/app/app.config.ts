import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { counterReducer } from './my-counter/counter.reducer';

const modulesAppConfig = importProvidersFrom(
  StoreModule.forRoot({ count: counterReducer })
);


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(),modulesAppConfig],
};

