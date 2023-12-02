import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import  routes from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routes),
    ]
  })
  .catch(err => console.error(err));
