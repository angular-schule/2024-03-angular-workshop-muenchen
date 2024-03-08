import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Test } from './test';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




const test = new Test('Hallo TypeScript 😻!!', 42);
console.log(test.nachricht);
console.log(test.antwort);